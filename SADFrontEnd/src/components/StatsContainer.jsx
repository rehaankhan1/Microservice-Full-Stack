import { FaCalendarCheck , FaBan, FaClock } from "react-icons/fa";
import Wrapper from "../assets/styles/StatsContainer";
import StatItem from "./StatItem";

const StatsContainer = ({defaultStats}) => {
  const stats = [
    {title: 'pending applications',
  count:defaultStats?.pending || 0,
icon:<FaClock/>,
color: '#4175c2',
bcg: '#b9cce7',
},
{title: 'interviews scheduled',
  count:defaultStats?.interview || 0,
icon:<FaCalendarCheck/>,
color: '#26c164',
bcg: '#b2f5cd',
},
{title: 'jobs declined',
  count:defaultStats?.declined || 0,
icon:<FaBan/>,
color: '#d66a6a',
bcg: '#ffeeee',
},
  ];
console.log(stats.count)
  return (
    <Wrapper>
      {stats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;