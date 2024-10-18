
import { Typewriter } from 'react-simple-typewriter';
import useTheme from '../../Hook/useTheme';

const MyComponent = ({ text }) => {
    const {theme} = useTheme()
  return (
    <div className="App">
      <span className='lg:text-2xl text-[22px] font-bold' style={{ paddingTop: '', margin: 'auto 0',  }}>
        {text}{' '}
        <span className={`${theme === 'light' ? 'bg-blue-100 text-yellow-500' : ' text-yellow-500'} m-0 p-0 h-screen`} style={{ color: '', fontWeight: 'bold' }}>
          <Typewriter
            words={['MERN Stack Developer', ]}
            loop={100}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </span>
    </div>
  );
};

export default MyComponent;
