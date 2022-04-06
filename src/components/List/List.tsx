import { CheckIcon } from '@heroicons/react/solid'

type ListItemsType = 'checked' | 'numbered'

type ListItem = {
  text: string
  isCountable: boolean
}

type ListProps = {
  type: ListItemsType
  items: Array<ListItem>
}

const List = ({ type, items }: ListProps) => {
  return (
    <ul className="my-4">
      {items.map((item: ListItem, i: number) => {
        return (
          <li key={i} className="space-x-4 flex my-2">
            <span>
              {type === 'numbered' ? (
                `${i + 1}.`
              ) : (
                <CheckIcon className="text-budget-green-500 h-6 w-6" />
              )}
            </span>
            <span>{item.text}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default List
