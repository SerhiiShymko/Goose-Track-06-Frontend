
import {
  MainWrapper,
  PlusIcon,
  UserPhotoWrapper,
  UserPhoto,
  UserInfoWrapper,
  UserNameMain,

  Input,
  Label,

  BtnSaveChangesWrapper,
  BtnSaveChanges,
  UserSurnameMain,
  ErrorIcon,
  SuccesIcon,
  LabelText,
  FormStyled,
} from './UserProfile.styled';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { Formik, Form, } from 'formik';
import { validateSchemaUserProfile } from './validateSchemaUserProfile';
import { updateUser } from 'redux/auth/operations';

const UserProfile = () => {
  const currentUserInfo = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <MainWrapper>
      <UserPhotoWrapper>
        <UserPhoto />
        <PlusIcon />
      </UserPhotoWrapper>
      <UserInfoWrapper>
        <UserNameMain>{currentUserInfo.name}</UserNameMain>
        <UserSurnameMain>User</UserSurnameMain>
      </UserInfoWrapper>

      <Formik
        initialValues={{
          name: currentUserInfo.name,
          email: currentUserInfo.email,
          birthday: currentUserInfo.birthday,
          phone: currentUserInfo.phone,
          skype: currentUserInfo.skype,
        }}
        validationSchema={validateSchemaUserProfile}
        onSubmit={values => {
          dispatch(updateUser(values));
        }}
      >
        {({
          touched,
          errors,
          values,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
          <Form>
            <FormStyled>
              {touched.name && errors.name ? (
                <div>
                  <Label>
                    <p style={{ color: '#DA1414' }}>Name</p>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      style={{ border: '1px solid #DA1414' }}
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                    />
                    <ErrorIcon />
                    <p style={{ color: '#DA1414' }}>{errors.name}</p>
                  </Label>
                </div>
              ) : (
                <div>
                  <Label>
                    <LabelText
                      color={values.name.length > 1 ? '#3CBC81' : undefined}
                    >
                      Name
                    </LabelText>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      border={
                        values.name.length > 1 && !errors.name
                          ? '1px solid #3CBC81'
                          : undefined
                      }
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                    />
                    {values.name !== `` && !errors.name && <SuccesIcon />}
                  </Label>
                </div>
              )}
              {touched.email && errors.email ? (
                <div>
                  <Label>
                    <p style={{ color: '#DA1414' }}>Email</p>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      style={{ border: '1px solid #DA1414' }}
                      type="text"
                      name="email"
                      placeholder="Enter email"
                    />
                    <ErrorIcon />

                    <p style={{ color: '#DA1414' }}>{errors.email}</p>
                  </Label>
                </div>
              ) : (
                <div>
                  <Label>
                    <LabelText
                      color={
                        values.email !== `` && !errors.email
                          ? ' #3CBC81'
                          : undefined
                      }
                    >
                      Email
                    </LabelText>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      type="text"
                      name="email"
                      border={
                        values.email !== `` && !errors.email
                          ? '1px solid #3CBC81'
                          : undefined
                      }
                      placeholder="Enter email"
                    />
                    {values.email !== `` && !errors.email && <SuccesIcon />}
                  </Label>
                </div>
              )}
              {touched.birthday && errors.birthday ? (
                <div>
                  <Label>
                    <p style={{ color: '#DA1414' }}>birthday</p>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.birthday}
                      style={{ border: '1px solid #DA1414' }}
                      type="text"
                      name="birthday"
                      placeholder="Enter birthday"
                    />
                    <ErrorIcon />
                    <p style={{ color: '#DA1414' }}>{errors.birthday}</p>
                  </Label>
                </div>
              ) : (
                <div>
                  <Label>
                    <LabelText
                      color={
                        values.birthday !== `` && !errors.birthday
                          ? ' #3CBC81'
                          : undefined
                      }
                    >
                      Birthday
                    </LabelText>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      value={values.birthday}
                      name="birthday"
                      border={
                        values.birthday !== `` && !errors.birthday
                          ? ' 1px solid #3CBC81'
                          : undefined
                      }
                      placeholder="Enter birthday"
                    />
                    {values.birthday !== `` && !errors.birthday && (
                      <SuccesIcon />
                    )}
                  </Label>
                </div>
              )}
              {touched.phone && errors.phone ? (
                <div>
                  <Label>
                    <p style={{ color: '#DA1414' }}>Phone</p>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      style={{ border: '1px solid #DA1414' }}
                      type="text"
                      name="phone"
                      placeholder="Enter phone"
                    />
                    <ErrorIcon />
                    <p style={{ color: '#DA1414' }}>{errors.phone}</p>
                  </Label>
                </div>
              ) : (
                <div>
                  <Label>
                    <LabelText
                      color={
                        values.phone !== `` && !errors.phone
                          ? ' #3CBC81'
                          : undefined
                      }
                    >
                      Phone
                    </LabelText>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      value={values.phone}
                      name="phone"
                      border={
                        values.phone !== `` && !errors.phone
                          ? ' 1px solid #3CBC81'
                          : undefined
                      }
                      placeholder="Enter phone"
                    />
                    {values.phone !== `` && !errors.phone && <SuccesIcon />}
                  </Label>
                </div>
              )}
              {touched.skype && errors.skype ? (
                <div>
                  <Label>
                    <p style={{ color: '#DA1414' }}>Skype</p>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.skype}
                      style={{ border: '1px solid #DA1414' }}
                      type="text"
                      name="skype"
                      placeholder="Enter skype"
                    />
                    <ErrorIcon />
                    <p style={{ color: '#DA1414' }}>{errors.skype}</p>
                  </Label>
                </div>
              ) : (
                <div>
                  <Label>
                    <LabelText
                      color={
                        values.skype !== `` && !errors.skype
                          ? ' #3CBC81'
                          : undefined
                      }
                    >
                      Skype
                    </LabelText>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      value={values.skype}
                      name="skype"
                      style={{ marginBottom: '32px' }}
                      border={
                        values.skype !== `` && !errors.skype
                          ? ' 1px solid #3CBC81'
                          : undefined
                      }
                      placeholder="Enter skype"
                    />
                    {values.skype !== `` && !errors.skype && <SuccesIcon />}
                  </Label>
                </div>
              )}
            </FormStyled>
            <BtnSaveChangesWrapper>
              <BtnSaveChanges type="submit" onClick={handleSubmit}>
                Save changes
              </BtnSaveChanges>
            </BtnSaveChangesWrapper>
          </Form>
        )}
      </Formik>
    </MainWrapper>
  );
};

export default UserProfile;
