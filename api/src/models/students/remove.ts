import { remove as removeStudent } from '../../@types/students';
import knexConnect from '../../utils/knexConnect';
import apiResponse from '../../utils/apiResponse';

const remove = async (payload: removeStudent) => {
  try {
    const { id } = payload;
    const student = await knexConnect('students').where({ id });

    if (!student) {
      return apiResponse(404, 'Not Found');
    }

    await knexConnect('students').where({ id }).update({ status: 'disabled' });

    return apiResponse(200, 'OK');
  } catch (error: any) {
    apiResponse(500, error.message);
  }
};

export default remove;
