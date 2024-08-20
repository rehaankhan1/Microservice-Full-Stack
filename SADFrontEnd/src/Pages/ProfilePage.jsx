import { FormRow , SubmitBtn} from '../components';
import Wrapper from '../assets/styles/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { Form } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch2 from '../Utils/customFetch2';

export const action = async({request}) => {
  const formData = await request.formData();
  //console.log(formData.get('avatar').name);
  const file = formData.get('avatar')
  if(file && file.size > 500000){
    toast.error('Image size is too large')
    return null;
  }
  try{
    await customFetch2.patch('/users/update-user', formData);
    toast.success('Profile updated successfully')
  } catch (error) {
       toast.error(error?.response?.data?.msg);
  }
  return null;
}
const ProfilePage = () => {
  const { user } = useOutletContext();
  const { name, lastName, email, location, avatar } = user;

  return <Wrapper>
    <Form method='post' className='form' encType='multipart/form-data'>

      <div style={{display: 'flex', alignItems: 'center',justifyContent:'center',marginTop: '-2rem', marginBottom:'1rem',paddingBottom:'0.5rem'}} >
        {typeof avatar !== 'undefined' && <img src={avatar} alt='avatar' style={{width: '100px', height: '100px', borderRadius: '100%', objectFit:'cover'}} />}
        </div>
        <div style={{display: 'flex', alignItems: 'center',justifyContent:'center', gap: '10px', paddingBottom: '50px'}}>
        <h2 className='form-title' style={{margin: '0',color:'#9614d0'}}><b>{`Hello ${name}!`} 😃</b></h2>
      </div>
        <div className='form-center'>
          <div className="form-row">
            <label htmlFor='avatar' className='form-label'>
              Select an image file (max 0.5 MB )

            </label>
            <input type="file" id='avatar' name='avatar'
            className='form-input' accept='image/*'/>

          </div>
    {/* file input */}
    <FormRow type='text' name='name' defaultValue={name} />
    <FormRow type='text' name='lastName' labelText='last name' defaultValue={lastName} />
    <FormRow type='email' name='email' defaultValue={email} />
    <FormRow type='text' name='location' defaultValue={location} />
    <SubmitBtn formBtn />
    </div>
    </Form>
  </Wrapper>;
};

export default ProfilePage;
