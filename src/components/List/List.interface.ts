import { ListType } from 'entities/list-type.type';

export interface ListProps {
  type: ListType;
  className?: string;
}

export interface ListItemProps {
  className?: string;
}
