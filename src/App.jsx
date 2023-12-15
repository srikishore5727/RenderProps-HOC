import './App.css';
import HOC from './components/HOC';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import RenderProps from './components/RenderProps';
import LikeImagePart2 from './components/LikeImagePart2';
import LikePostPart2 from './components/LikePostPart2';


function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        {/* <LikePost/>
        <LikeImage/>
        <HOC/> */}
        <RenderProps render={(count,handleCount)=><LikeImagePart2 count={count} handleCount={handleCount}/>}/>
        <RenderProps render={(count,handleCount)=><LikePostPart2 count={count} handleCount={handleCount}/>}/>
      </div>
    </div>
  );
}

export default App;
