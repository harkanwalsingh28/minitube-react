import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import Videodetail from './components/video_details';
import YTSearch from 'youtube-api-search';


const API_KEY=' AIzaSyBGS1y6U1SvSNPJTCq5N0kIiWJ6h_cdTOs ';


class App extends Component{
    constructor(props){
        super(props);
        this.state={videos:[],
        selectedVideo:null
        };

        YTSearch({key:API_KEY, term:'surfboards'}, (videos)=>{
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        });
    }
    render(){
        return(
            <div>
                <SearchBar  />
                <Videodetail video={this.state.selectedVideo}/>
                <VideoList
                onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
                videos={this.state.videos}/>
                </div>
        );
    }
}
    


ReactDOM.render(<App />, document.getElementById('root'));
