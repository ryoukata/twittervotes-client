interface ItemOptionsProps {
  // options: Map<string, number>
  options: Record<string, number>
}

export const ItemOptions = ({options}: ItemOptionsProps) => {

  return (
    <ul id="options">
      {Object.entries(options).map((map) => {
        return <li><small className="label label-default">{map[1]} </small>{map[0]}</li>;
      }
    )}
    </ul>
  )
}