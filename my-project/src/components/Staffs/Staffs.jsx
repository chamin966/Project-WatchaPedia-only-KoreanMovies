import './Staffs.css';

function Staffs({ staffs }) {
  console.log(staffs);
  return (
    <ul className='detail__staffs'>
      {staffs.map((stf, i) => (
        <ul key={i} className='detail__staff'>
          <li>{stf.staffNm}</li>
          <li className='role'>
            {stf.staffRoleGroup} {stf.staffRole === '' ? '' : `| ${stf.staffRole}`}
          </li>
        </ul>
      ))}
    </ul>
  );
}

export default Staffs;
