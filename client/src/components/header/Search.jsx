import React, { useState } from 'react';
import Icons from '../icons/Icons';
import {
  StyledSearchContainer,
  StyledSearchIcon,
  StyledCloseSearch,
  StyledSearchUser,
} from './styles/search';

import { dummyUser } from '../helper/Helper';
import UserCard from '../UserCard';

const Search = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);

  const [load, setLoad] = useState(false);

  const handleClose = () => {
    setSearch('');
    setUsers([]);
  };

  const getDataApi = (uri) => {
    return uri;
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search) return;

    try {
      setLoad(true);
      const res = await getDataApi(`${search}`);

      console.log('res>>>', res);

      console.log();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <StyledSearchContainer onSubmit={handleSearch}>
      <input
        type='text'
        name='search'
        onChange={(e) =>
          setSearch(e.target.value.toLowerCase().replace(/ /g, ''))
        }
        value={search}
        id='search'
        title='Enter to Search'
      />
      <StyledSearchIcon style={{ opacity: search ? 0 : 0.3 }}>
        <span>
          <Icons.Search />
        </span>
        <span>Enter to Search</span>
      </StyledSearchIcon>
      <StyledCloseSearch
        style={{ opacity: users.length === 0 ? 0 : 1 }}
        onClick={handleClose}
      >
        <Icons.Close />
      </StyledCloseSearch>
      <button type='submit'>Search</button>

      {load && <p className='loading'>Loading...</p>}

      <StyledSearchUser>
        {search &&
          dummyUser.map((user) => (
            <UserCard key={user.id} user={user} handleClose={handleClose} />
          ))}
      </StyledSearchUser>
    </StyledSearchContainer>
  );
};

export default Search;
