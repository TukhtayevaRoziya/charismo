// import axios from 'axios';
// import React, { useState, useEffect } from 'react'

import axios from "axios";
import React from 'react';

// import { AllType, ListType } from '../../../types'
// import List from './List'

// export interface Props {
//     list?: ListType[]
// }

// export interface State {
//     all: any
// }



// export const Search = () => {
//     const [data, setData] = useState([])

//     useEffect(() => {

//     axios.get('http://api.mediastack.com/v1/news?access_key=ba529707eb6770fc110f84028be09c0b& keywords = tennis&countries = us, gb, deba529707eb6770fc110f84028be09c0b').then((res:any) => {
//         console.log(res.data.data);
//         debugger

//         setData(res.data.data)
//     })}, []);
//     console.log(data);

//     // constructor(props: Props) {
//     //     super(props);
//     //     // this.state = {
//     //         // all: {
//     //             // ,
//     //             // videoList: [
//     //             //     { id: 1, name: "Clothes shop", route: '/clothesShop', newsType: 'Video' },
//     //             //     { id: 2, name: "Build", route: '/build', newsType: 'Video' },
//     //             //     { id: 3, name: "Calendar", route: '/calendar', newsType: 'Video' },
//     //             //     { id: 4, name: "Hand", route: '/hand', newsType: 'Video' },
//     //             //     { id: 5, name: "Coder girls", route: '/girlCoders', newsType: 'Video' },
//     //             //     { id: 6, name: "Benefit magazines", route: '/magazine', newsType: 'Video' },
//     //             //     { id: 7, name: "White coder girls", route: '/whiteCoderGirl', newsType: 'Video' },
//     //             //     { id: 8, name: "Shopping bags", route: '/bag', newsType: 'Video' },
//     //             //     { id: 9, name: "Little coder girls", route: '/littleCoderGirl', newsType: 'Video' },
//     //             //     { id: 10, name: "Flyer shop", route: '/flyerShop', newsType: 'Video' },
//     //             //     { id: 11, name: "Black coder girls", route: '/blackCoderGirl', newsType: 'Video' },
//     //             //     { id: 12, name: "Beautiful boxes", route: '/boxes', newsType: 'Video' },
//     //             // ],
//     //             // photoList: [
//     //             //     { id: 1, name: "Clothes shop", route: '/clothesShop', newsType: 'Photo' },
//     //             //     { id: 2, name: "Build", route: '/build', newsType: 'Photo' },
//     //             //     { id: 3, name: "Calendar", route: '/calendar', newsType: 'Photo' },
//     //             //     { id: 4, name: "Hand", route: '/hand', newsType: 'Photo' },
//     //             //     { id: 5, name: "Coder girls", route: '/girlCoders', newsType: 'Photo' },
//     //             //     { id: 6, name: "Benefit magazines", route: '/magazine', newsType: 'Photo' },
//     //             //     { id: 7, name: "White coder girls", route: '/whiteCoderGirl', newsType: 'Photo' },
//     //             //     { id: 8, name: "Shopping bags", route: '/bag', newsType: 'Photo' },
//     //             //     { id: 9, name: "Little coder girls", route: '/littleCoderGirl', newsType: 'Photo' },
//     //             //     { id: 10, name: "Flyer shop", route: '/flyerShop', newsType: 'Photo' },
//     //             //     { id: 11, name: "Black coder girls", route: '/blackCoderGirl', newsType: 'Photo' },
//     //             //     { id: 12, name: "Beautiful boxes", route: '/boxes', newsType: 'Photo' },
//     //             // ],
//     //             // textList: [
//     //             //     { id: 1, name: "Clothes shop", route: '/clothesShop', newsType: 'Text' },
//     //             //     { id: 2, name: "Build", route: '/build', newsType: 'Text' },
//     //             //     { id: 3, name: "Calendar", route: '/calendar', newsType: 'Text' },
//     //             //     { id: 4, name: "Hand", route: '/hand', newsType: 'Text' },
//     //             //     { id: 5, name: "Coder girls", route: '/girlCoders', newsType: 'Text' },
//     //             //     { id: 6, name: "Benefit magazines", route: '/magazine', newsType: 'Text' },
//     //             //     { id: 7, name: "White coder girls", route: '/whiteCoderGirl', newsType: 'Text' },
//     //             //     { id: 8, name: "Shopping bags", route: '/bag', newsType: 'Text' },
//     //             //     { id: 9, name: "Little coder girls", route: '/littleCoderGirl', newsType: 'Text' },
//     //             //     { id: 10, name: "Flyer shop", route: '/flyerShop', newsType: 'Text' },
//     //             //     { id: 11, name: "Black coder girls", route: '/blackCoderGirl', newsType: 'Text' },
//     //             //     { id: 12, name: "Beautiful boxes", route: '/boxes', newsType: 'Text' },
//     //             // ],

//     //         // }

//     //     }
//     // }

//     // render() {
//     return (
//         <List all={data} />
//     );
//     // }

// }
const URL = "https://10degrees.uk/wp-json/wp/v2/posts"; // URL variable stores JSON url || API taken from 10 Degrees WordPress Agency

export class Search extends React.Component {
	state = {
		post: [],
		allPosts: []
	};

	componentDidMount() {
		axios
			.get(URL, {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				}
			})
			.then(({ data }) => {
				this.setState({
					post: data,
					allPosts: data // array data from JSON stored in these
				});
			})
			.catch((err:any) => {});
	}

	_onKeyUp = (e:any) => {
		// filter post list by title using onKeyUp function
		const post = this.state.allPosts.filter((item: any)=>
			item.title.rendered.toLowerCase().includes(e.target.value.toLowerCase())
		);
		this.setState({ post });
	};

	render() {
		return (
			<div className="container">
				<div className="search-outer">
					<form
						role="search"
						method="get"
						id="searchform"
						className="searchform"
						action=""
					>
						{/* input field activates onKeyUp function on state change */}
						<input
							type="search"
							onChange={this._onKeyUp}
							name="s"
							id="s"
							placeholder="Search"
						/>
						<button type="submit" id="searchsubmit">
							<i className="fa fa-search" aria-hidden="true" />
						</button>
					</form>
				</div>
				<ul className="data-list">
					{/* post items mapped in a list linked to onKeyUp function */}
					{this.state.post.map((item:any, index:any) => (
						<li className={"block-" + index}>
							<a className="title" href={item.link}>
								<h3>{item.title.rendered}</h3>
							</a>
							<a className="link" href={item.link}>
							 
							</a>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

