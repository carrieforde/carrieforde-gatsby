---
title: 'Injecting dynamic data into a static site'
date: 2020-09-19
category: JavaScript
showToc: true
---

I'm building a NextJS application that grabs template data from WordPress, to allow business stakeholders to build their own application templates. In the application, we gather information about the customer

## Introducing merge fields

If you've ever worked on HTML emails, you're likely familiar with the concept of merge fields. They are essentially placeholders for dynamic pieces of information in a static HTML template. For example:

```html
<h1>Hello {{firstName}}!</h1>
```

which in the actual email would translate to

```
Hello Carrie!
```

## Set up the application

We'll start by creating a simple page in WordPress that contains a merge field called `{{user}}`. Once the page has been published, we can spin up a simple React application. For this post, I will be building a simple NextJS application.

At this point, we should be fine just injecting the rendered content into the page.

```tsx
import { GetStaticProps } from 'next';
import { ReactElement } from 'react';

interface IndexPageProps {
  data: any;
}

export default function IndexPage({ data }: IndexPageProps): ReactElement {
  const { rendered } = data.content;

  return <div dangerouslySetInnerHTML={{ __html: rendered }} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://alcatraztheme.com/wp-json/wp/v2/posts/6');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
```

<cf-alert type="info">
  We're using <code>getServerSideProps()</code> to get the data in this instance because later in the post we'll need the ability to snag query parameters from the URL.
</cf-alert>

We should now see our simple `Hello {{user}}!` content in our NextJS application.

We're going to add a utility function to check whether our content has a merge field.

```ts
export function hasMergeField(markup: string): boolean {
  return markup.search(/{{\w+}}/g) > -1;
}
```

The `search()` method returns the starting position of the merge field if one exists, otherwise it returns `-1`. Since I want to return a boolean, I added a check to determine whether the search returns a value greater than `-1`.

The regex in the `search()` looks for one or more alphanumeric or underscores between the double curly braces.

We can check this is working as expected by logging some statements:

```js
console.log(hasMergeField(data.content.rendered));
console.log(hasMergeField('dog'));
```

In the terminal you should see (you may need to refresh the page):

```bash
true
false
```

<cf-alert type="warning">
  A better way of testing the output of these functions is to write unit tests. This will be more apparent as we alter the function later in the post.
</cf-alert>

The next step will be actually extracting the merge field name from the markup. We'll pass the extracted field name to a component that will render merge field. For now, we're going to assume we only have one merge field we want to handle at a time. Later, we'll update things to manage multiple merge fields.

```ts
export function extractMergeField(markup: string): string {
  const start = markup.indexOf('{{') + 2;
  const end = markup.indexOf('}}');

  return markup.substring(start, end);
}
```

To update the content containing the merge field, we'll pass the extracted merge field, as well as the markup so we can make our replacement with real data.

```tsx
import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
// highlight-start
import MergeField from '../components/MergeField';
import { extractMergeField, hasMergeField } from '../utils';
// highlight-end

interface IndexPageProps {
  data: any;
}

export default function IndexPage({ data }: IndexPageProps): ReactElement {
  const { rendered } = data.content;
  const field = hasMergeField(rendered) ? extractMergeField(rendered) : null; // highlight-line

  // highlight-start
  return (
    <>
      {field ? (
        <MergeField fieldName={field} markup={rendered} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
      )}
    </>
  );
  // highlight-end
}

// hide-start
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://alcatraztheme.com/wp-json/wp/v2/posts/6');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
```

For the initial pass of the merge field, we'll simply set a variable within the component for the `user`.

```tsx
import React from 'react';

interface MergeFieldProps {
  fieldName: string;
  markup: string;
}

function MergeField({ fieldName, markup }: MergeFieldProps) {
  const user = 'Carrie';
  let newMarkup = '';

  if (fieldName === 'user') {
    newMarkup = markup.replace(`{{${fieldName}}}`, user);
    return <div dangerouslySetInnerHTML={{ __html: newMarkup }} />;
  }

  return null;
}

export default MergeField;
```

Now if you look at your Next application, you should see that the merge field has been replaced by the value supplied for `user`. Obviously, in a real-world scenario, this doesn't quite work. The whole point of this exercise is to inject dynamic data into the page, so let's move onto the next phase.

## Swapping merge field values with query parameters

As a simple example, of updating a merge field with dynamic data, we'll use query parameters to inject values into our application.

<cf-alert type="info">
  In NextJS, we can grab query parameters during when making a server side request, and then pass those parameters to the page component.
</cf-alert>

```tsx
import { GetServerSideProps } from 'next';
import { ReactElement, useEffect } from 'react';
import MergeField from '../components/MergeField';
import { extractMergeField, hasMergeField } from '../utils';

interface IndexPageProps {
  data: any;
  user?: string; // highlight-line
}

export default function IndexPage({
  data,
  user, // highlight-line
}: IndexPageProps): ReactElement {
  const { rendered } = data.content;
  const field = hasMergeField(rendered) ? extractMergeField(rendered) : null;

  // highlight-start
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', user);
    }
  });
  // highlight-end

  return (
    <>
      {field ? (
        <MergeField fieldName={field} markup={rendered} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
      )}
    </>
  );
}

// hide-start
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch('https://alcatraztheme.com/wp-json/wp/v2/posts/6');
  const data = await res.json();
  const user = query && query.user ? query.user : null;

  return {
    props: {
      data,
      user,
    },
  };
};
// hide-end
```

Create a simple higher order component to manage collected data and share with other components.

```tsx
import React, { useState, useEffect } from 'react';

export interface withDataProps {
  user: string;
}

function withData<T extends withDataProps>(
  WrappedComponent: React.ComponentType<T>
): any {
  return function ({ ...props }: T) {
    const [user, setUser] = useState('');

    useEffect(() => {
      const _user = localStorage.getItem('user');
      setUser(_user);
    }, [user]);

    return <WrappedComponent user={user} {...props} />;
  };
}

export default withData;
```

We're using an HOC here to keep the `MergeField` component focused on it's job. The `withData` component can handle any data fetching (from an API or local storage).

Updating the `MergeField` is pretty simple. We'll wrap the exported `MergeField` in `withData`, and pass the props from `withData` to `MergeField`. Then we'll de-structure `user` from our `props`.

```tsx
import React from 'react';
import withData, { withDataProps } from './withData'; // highlight-line

interface MergeFieldProps extends withDataProps {
  fieldName: string;
  markup: string;
}

// highlight-start
function MergeField({ fieldName, markup, ...props }: MergeFieldProps) {
  const { user } = props;
  // highlight-end
  let newMarkup = '';

  if (fieldName === 'user') {
    newMarkup = markup.replace(`{{${fieldName}}}`, user);
    return <div dangerouslySetInnerHTML={{ __html: newMarkup }} />;
  }

  return null;
}

export default withData(MergeField); // highlight-line
```

Now if you add `?user=YourName` to the URL, you will see name from the query parameter on the page.

To see how the data gets shared with other components, let's add a `user` page to the app:

```tsx
import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import MergeField from '../components/MergeField';
import { extractMergeField, hasMergeField } from '../utils';

interface ProfilePageProps {
  data: any;
}

export default function ProfilePage({ data }: ProfilePageProps): ReactElement {
  const { rendered } = data.content;
  const field = hasMergeField(rendered) ? extractMergeField(rendered) : null;

  return (
    <>
      {field ? (
        <MergeField fieldName={field} markup={rendered} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://alcatraztheme.com/wp-json/wp/v2/posts/11');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
```

You can see now that when you navigate to the profile page, your `user` parameter was shared with that page.

## Adding default values

The way the `MergeField` currently works is that it will show information when it's available, otherwise it returns `null`,which results in a blank page. 🙃

So let's add a way to pass a default value in the merge field.

We'll pass a default value by allowing the user to add a pipe (`|`) and their default text. So for our user, it may look something like this:

```
Hello {{user|there}}!
```

Where `Hello there` will print to the screen when no `user` parameter is available.

We'll need to update our `utils.ts` `hasMergeField()` function to look for a default value. If you're following a TDD approach, the best idea would be to add a new assertion with a default.

You'll see that the regex in the function just got a lot gnarlier:

```ts
export function hasMergeField(markup: string): boolean {
  return markup.search(/{{[\w]+(\|[\w\s!@#$%^&*()=+-[\];':",./<>?]+)?}}/g) > -1; // highlight-line
}
```

Since this regex is gonna be a massive pain to reproduce, let's create a constant for it, and update our code accordingly.

```ts
// highlight-start
export const MERGE_FIELD_REGEX = new RegExp(
  /{{[\w]+(\|[\w\s!@#$%^&*()=+-[\];':",./<>?]+)?}}/g
);
// highlight-end

export function hasMergeField(markup: string): boolean {
  return markup.search(MERGE_FIELD_REGEX) > -1; // highlight-line
}

// hide-start
export function extractMergeField(markup: string): string {
  const start = markup.indexOf('{{') + 2;
  const end = markup.indexOf('}}');

  return markup.substring(start, end);
}
// hide-end
```

```tsx
import React from 'react';
import { MERGE_FIELD_REGEX } from '../../utils/utils'; // highlight-line
import withData, { withDataProps } from '../withData';

interface MergeFieldProps extends withDataProps {
  fieldName: string;
  markup: string;
}

function MergeField({ fieldName, markup, ...props }: MergeFieldProps) {
  const { user } = props;
  let mergeField = '';
  // highlight-start
  let newMarkup = '';

  if (fieldName === 'user') {
    mergeField = user;
  }

  if (!mergeField && defaultValue) {
    mergeField = defaultValue;
  }

  if (mergeField) {
    newMarkup = markup.replace(MERGE_FIELD_REGEX, user);
    return <div dangerouslySetInnerHTML={{ __html: newMarkup }} />;
  }
  // highlight-end

  return null;
}

export default withData(MergeField);
```
