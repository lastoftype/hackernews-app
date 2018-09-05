import superagent from 'superagent'
import assign from 'object-assign'
import qs from 'qs'
import _ from 'lodash'
import Promise from '../lib/promise'

const BASE_URI = `https://hacker-news.firebaseio.com/v0/`

export default class ApiClient {
	constructor(client = superagent, baseUri = BASE_URI) {
		this.baseUri = baseUri
		this.client = client
	}

	getReq({data, url}) {
		 const reqUrl = `${url}?${qs.stringify(data)}`
     const req = this.client['get'](reqUrl).retry(2)
     return req
	}

	request(m, path, d = {}) {
		const method = m.toLowerCase()
    const data = assign({}, d)
    const url = `${this.baseUri}${path}`
    const req = this.getReq({ data, url })

		return new Promise((fulfill, reject, onCancel) => {

			req.end((err, res) => {

				if (res && res.status !== 200 && res.body && res.body.error) {
	        reject(new Error(res.body.error))
	        return
	      }

				if (err) {
	        reject(new Error(`Connection Error: ${err.message}`))
	      } else {
	        fulfill(res.body)
	      }
	    })

	    onCancel(() => {
        req.abort()
      })

		})
	}

	get(path, data = {}) {
		return this.request('get', path, data);
	}

	getTopStoriesIds(d = {}) {
		const data = { ...d, print: 'pretty' }
		return this.get('topstories.json', data)
	}

	getStories(idArray, limit = 100) {
		const promises = idArray.slice(0, limit).map(id => this.getSingleStory(id))
		return Promise.all(promises).then(res => res);
	}

	getTopStories(limit) {
		return this.getTopStoriesIds()
			.then(storyIds => this.getStories(storyIds, limit))
			.then(data => data)
			.catch(err => console.log('error!'))
	}

	getSingleStory(id, d) {
		const data = { ...d, print: 'pretty' }
		return this.get(`item/${id}.json`, data)
	}
}