import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

export const ContactsListFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="keyword"
        onChange={e => dispatch(setFilter(e.target.value))}
        value={filter}
        autoComplete="off"
      />
    </div>
  );
};
