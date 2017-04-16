const request = () => (
  {
    type: 'FETCH_COMMITS_REQUEST'
  }
)

const failed = message => (
  {
    type: 'FETCH_COMMITS_REQUEST_FAILED',
    message
  }
)

const succeed = payload => (
  {
    type: 'FETCH_COMMITS_REQUEST_SUCCEED',
    payload
  }
)

export function getCommits () {
  return dispatch => {
    dispatch(request())

    window.fetch('https://api.github.com/repos/rhberro/the-react-client/commits')
      .then(data => data.json())
      .then(data => dispatch(succeed(data)))
      .catch(error => dispatch(failed(error)))
  }
}
