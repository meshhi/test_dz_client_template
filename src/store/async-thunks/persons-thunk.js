import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_ALL_PERSONS } from './api-urls';
import axios from 'axios';

const fetchAllPersons = createAsyncThunk(
  'persons/fetchAll',
  async (_, thunkApi) => {
    try {
      const config = {
        method: 'get',
        url: GET_ALL_PERSONS,
        // headers: {
        //   // 'Content-Disposition': `attachment; filename=${file.name}`,
        //   'Authorization': `Token ${localStorage.getItem('authToken')}`
        // },
        // params: { 
        //   date: '2023-01-23',
        // },
        // data: data,
      };
  
      const response = await axios(config);
  
      return response.data;
    } catch(err) {
      return thunkApi.rejectWithValue(err.message)
    }
  }
)

export default fetchAllPersons;
