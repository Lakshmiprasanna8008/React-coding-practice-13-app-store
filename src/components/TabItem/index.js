// Write your code here
// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, updateActive, active} = props
  const {displayText, tabId} = tabsList

  const onUpdate = () => {
    updateActive(tabId)
  }
  const activeBtn = active ? 'update-button' : ''

  return (
    <li>
      <button type="button" className={`${activeBtn}`} onClick={onUpdate}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
