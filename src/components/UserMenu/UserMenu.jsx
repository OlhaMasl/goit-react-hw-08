import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import s from './UserMenu.module.css';

const UserMenu = () => {
  
  // const dispatch = useDispatch();
  // const { user } = useSelector(selectUser);
  // onClick={() => dispatch(logOut())}

  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {user.name}</p>
      <button type="button" >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;