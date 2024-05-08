
import { axiosClient } from './../../api/axios';


const UserApi={
    login: async (email, password) => {
        return axiosClient.post('/login', { email, password });
      },
}
export default UserApi;