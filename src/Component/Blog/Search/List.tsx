import React from "react";
import { Route } from "react-router";
import { NavLink, Switch } from "react-router-dom";

import { ListType } from "../../../types";

import moduleName from "./Search.module.css";
import { SearchAllMap } from "./Maps/SearchAllMap";

export interface ListProps {
  all: any;
}

export interface ListState {
  AllFiltered: ListType[];
  // VideoFiltered: any
  // PhotoFiltered: ListType[]
  // TextFiltered: ListType[]
}

class List extends React.Component<ListProps, ListState> {
  // componentDidMount() {

  //     axios.get('http://api.mediastack.com/v1/news?access_key=ba529707eb6770fc110f84028be09c0b& keywords = tennis&countries = us, gb, deba529707eb6770fc110f84028be09c0b').then((res: any) => {
  //         console.log(res.data.data);
  //     }

  constructor(props: ListProps) {
    super(props);
    this.state = {
      AllFiltered: [],
      // VideoFiltered: [],
      // PhotoFiltered: [],
      // TextFiltered: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      AllFiltered: this.props.all,
      // VideoFiltered: this.props.all.videoList,
      // PhotoFiltered: this.props.all.photoList,
      // TextFiltered: this.props.all.textList
    });
  }

  componentWillReceiveProps(nextProps: ListProps) {
    this.setState({
      AllFiltered: nextProps.all.allList,
      // VideoFiltered: nextProps.all.videoList,
      // PhotoFiltered: nextProps.all.photoList,
      // TextFiltered: nextProps.all.textList,
    });
  }

  handleChange(e: any) {
    let AllCurrentList = [];
    // let VideoCurrentList = [];
    // let PhotoCurrentList = [];
    // let TextCurrentList = [];
    let AllNewList = [];
    // let VideoNewList = [];
    // let PhotoNewList = [];
    // let TextNewList = [];

    if (e.target.value !== "") {
      AllCurrentList = this.props.all.allList;
      // VideoCurrentList = this.props.all.videoList
      // PhotoCurrentList = this.props.all.photoList
      // TextCurrentList = this.props.all.textList
      AllNewList = AllCurrentList.filter((item: any) => {
        const lc = item.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
      // VideoNewList = VideoCurrentList.filter(item => {
      //     const lc = item.name.toLowerCase();
      //     const filter = e.target.value.toLowerCase();
      //     return lc.includes(filter)
      // })
      // PhotoNewList = PhotoCurrentList.filter(item => {
      //     const lc = item.name.toLowerCase();
      //     const filter = e.target.value.toLowerCase();
      //     return lc.includes(filter)
      // })
      // TextNewList = TextCurrentList.filter(item => {
      //     const lc = item.name.toLowerCase();
      //     const filter = e.target.value.toLowerCase();
      //     return lc.includes(filter)
      // })
    } else {
      console.log(e.target.value);
      AllNewList = this.props.all.allList;
      // VideoNewList = this.props.all.videoList
      // PhotoNewList = this.props.all.photoList
      // TextNewList = this.props.all.textList
    }
    this.setState({
      AllFiltered: AllNewList,
      // VideoFiltered: VideoNewList,
      // PhotoFiltered: PhotoNewList,
      // TextFiltered: TextNewList,
    });
  }
  render() {
    // debugger
    console.log(this.props.all);

    let map = this.props.all.map((a: any) => (
      <>
        <p>{a.category}</p>
        <h2>{a.country}</h2>
        <h1>{a.author}</h1>
        <h3>{a.description}</h3>
        <img src={a.image} alt="" />
        <h4>{a.language}</h4>
        <h5>{a.published_at}</h5>
        <a href={a.source}>{a.source}</a>
        <h6>title:{a.title}</h6>
        <a href={a.url}>sdg</a>
      </>
    ));
    return (
      <div className={moduleName.box}>
        <input
          type="text"
          className={moduleName.inp}
          placeholder="Поиск..."
          onChange={this.handleChange}
        />
        <div className={moduleName.blocks_body}>
          <Switch>
            {/* <Route path={'/blog/video'} render={() => <SearchVideoMap VideoFiltered={this.state.VideoFiltered} />} />
                        <Route path={'/blog/photo'} render={() => <SearchPhotoMap PhotoFiltered={this.state.PhotoFiltered} />} />
                        <Route path={'/blog/text'} render={() => <SearchTextMap TextFiltered={this.state.TextFiltered} />} /> */}
            <Route
              path={"/blog"}
              render={() => (
                <SearchAllMap AllFiltered={this.state.AllFiltered} />
              )}
            />
          </Switch>
          {map}
          <div className={moduleName.videoType}>
            <NavLink to="/blog">All</NavLink>
            <NavLink to="/blog/video">Video</NavLink>
            <NavLink to="/blog/photo">Photo</NavLink>
            <NavLink to="/blog/text">Text</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
