type DateStampProps = {
  title: string
  datetime: string | number
}

const DateStamp = ({ title, datetime }: DateStampProps) => {
  return (
    <div className="w-full space-x-4">
      <span className="font-semibold capitalize">{title}</span>
      <span className="text-gray-400">{datetime}</span>
    </div>
  )
}

export default DateStamp
