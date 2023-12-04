import styled from "styled-components";

const Message = styled.span`
  color: red;
  font-weight: 600;
  margin: 5px 0;
`;

export const Errormessage = ({ messages }) => {
  return (
    <Message>
      {messages &&
        messages.map((message, index) => <p key={index}>{message}</p>)}
    </Message>
  );
};
