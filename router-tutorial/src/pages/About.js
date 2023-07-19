import{useState} from 'react'
import { useLocation } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';


const About = () => {
    // const [checked, setChecked] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const  c = searchParams.get('checked');
    const checked = c === 'true' ? true : false;
    
    console.log(checked);

  return (
    <div>
      <h1>About</h1>
      <p>사이트 소개...</p>
      <input type='checkbox' checked={true}/>
    </div>
  );
};

export default About;
