import axios from 'axios';

export function* checkDiscountProcessService(payload) {
    return yield axios
        .get('http://dummy.restapiexample.com/api/v1/employees', {
            params: {test_param: 1}
        })
        .then(function (response) {
            console.log('test',response);
            return response.status === 200 ? response.data : [];
        })
}
