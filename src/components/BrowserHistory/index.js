import React, {useState} from 'react'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

const BrowserHistory = () => {
  const [searchInput, setSearchInput] = useState('')
  const [historyList, setHistoryList] = useState(initialHistoryList)

  const handleSearch = e => {
    setSearchInput(e.target.value)
  }

  const filteredHistoryList = historyList.filter(historyItem =>
    historyItem.title.toLowerCase().includes(searchInput.toLowerCase()),
  )

  const handleDelete = id => {
    setHistoryList(historyList.filter(historyItem => historyItem.id !== id))
  }

  return (
    <div className="browser-history-container">
      <h1>Browser History</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/search-img.png"
        alt="search"
      />
      <input
        type="search"
        value={searchInput}
        onChange={handleSearch}
        placeholder="Search history"
      />
      {filteredHistoryList.length === 0 ? (
        <p>There is no history to show</p>
      ) : (
        <ul>
          {filteredHistoryList.map(historyItem => (
            <li key={timeAccessed}>
              <img src={historyItem.logoUrl} alt="app logo" />
              <div>
                <p>{historyItem.title} </p>
                <p>{historyItem.domainUrl} alt="logoUrl"</p>
                <p>Accessed at: {historyItem.timeAccessed}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                  alt="delete"
                />
              </div>
              <button
                type="button"
                data-testid="delete"
                onClick={() => handleDelete(historyItem.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BrowserHistory
