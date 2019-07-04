import React from 'react'
import { Button} from 'antd'
import qs from 'qs'

const Home = (props) => {
  const { search } = props.location
  const queries = qs.parse(search.substr(1))
  const test = queries['test'] || null
    return (
      <div>
        <Button onClick={() => props.history.push('/neighbor')}>Press to go neighbor</Button>
        {test} yoooooo
      </div>
    )
}

export default Home