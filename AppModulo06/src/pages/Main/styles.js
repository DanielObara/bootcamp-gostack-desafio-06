import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
	flex: 1;
	background-color: #e1d6d7;
	padding: 30px;
`;

export const Form = styled.View`
	flex-direction: row;
	padding-bottom: 20px;
	border-bottom-width: 1px;
	border-color: #15dc6e;
`;

export const Input = styled.TextInput.attrs({
	placeholderTextColor: '#9F9192',
})`
	flex: 1;
	height: 40px;
	background: #eee;
	border-radius: 4px;
	padding: 0 15px;
	border: 1px solid #15dc6e;
`;

export const SubmitButton = styled(RectButton)`
	justify-content: center;
	align-items: center;
	margin-left: 10px;
	background: #15dc6e;
	padding: 0 12px;
	border-radius: 4px;
	opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
	showVerticalScrollIndicator: true,
})`
	margin-top: 20px;
`;

export const User = styled.View`
	align-items: center;
	margin: 0 20px 30px;
`;
export const Avatar = styled.Image`
	width: 64px;
	height: 64px;
	border-radius: 32px;
	background: #eee;
`;
export const Name = styled.Text`
	font-size: 15;
	color: #333;
	font-weight: bold;
	margin-top: 4px;
	text-align: center;
`;
export const Bio = styled.Text.attrs({
	numberOfLines: 2,
})`
	font-size: 13px;
	line-height: 18px;
	font-weight: bold;
	color: #837576;
	margin-top: 5px;
	text-align: center;
`;
export const ProfileButton = styled(RectButton)`
	margin-top: 10px;
	align-self: stretch;
	border-radius: 4px;
	background: #15dc6e;
	justify-content: center;
	align-items: center;
	height: 36;
`;

export const RemoveProfileButton = styled(RectButton)`
	margin-top: 10px;
	align-self: stretch;
	border-radius: 4px;
	background: #de6d6d;
	justify-content: center;
	align-items: center;
	height: 36;
`;
export const ProfileButtonText = styled.Text`
	font-size: 15;
	font-weight: bold;
	color: #fff;
	text-transform: uppercase;
`;
