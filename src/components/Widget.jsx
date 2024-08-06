

// eslint-disable-next-line react/prop-types
const Widget = ({ title, content }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 m-2 bg-white shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}

export default Widget
