import styled from 'styled-components/native'

export const ModalContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  height: 60%;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 5px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
`

export const ModalTitle = styled.Text`
  font-weight: bold;
  font-size: 22px;
`

export const ModalIconContainer = styled.View``

export const ModalDescriptionContainer = styled.View``

export const ModalDescription = styled.Text`
  margin-top: 15px;
  text-align: justify;
  font-size: 16px;
  text-align: center;
  line-height: 26px;
`

export const ButtonDescription = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`

export const ButtonContainer = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary};
  padding: 10px 40px;
  border: 1px solid ${({ theme }) => theme.colors.success};
  border-radius: 5px;
`
