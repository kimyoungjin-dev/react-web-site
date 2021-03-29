import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 40px;
`;

const SubTitle = styled.h1`
  color: white;
  font-size: 30px;
  margin: 30px 0px;
`;

const SForm = styled.form`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-bottom: 100px;
`;

const Input = styled.input`
  outline: none;
  padding-left: 10px;
  font-size: 15px;
  height: 100%;
  width: 80%;
  margin-right: 10px;
  border-radius: 3px;
  & ::placeholder {
    padding-left: 10px;
    color: gray;
  }
`;

const Button = styled.button`
  outline: none;
  width: 30%;
  height: 100%;
  border: 1px solid white;
  background-color: rgb(53, 53, 53);
  padding: 10px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
`;

const Form = () => {
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setValue("");
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Title>
        Join the Adventure newseletter to receive our best vacation deals
      </Title>
      <SubTitle>You can unsubscribe at any time</SubTitle>
      <SForm onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Your Email"
          value={value}
          onChange={onChange}
        />
        <Button type="submit">Subscribe</Button>
      </SForm>
    </>
  );
};

export default Form;
