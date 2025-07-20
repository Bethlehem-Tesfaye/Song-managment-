import React from 'react';
import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 25px 25px;
  margin: 5rem auto 0 auto;
  border: 1px solid #d1d5db;
  background-color: white;
  border-radius: 15px;
  width: 80%;

  @media (min-width: 640px) {
    width: 60%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
  @media (min-width: 1280px) {
    width: 30%;
  }
`;

const Heading = styled.h2`
  font-size: 25px;
  font-weight: 600;
`;

const Input = styled.input`
  border: 1px solid #d1d5db;
  padding: 12px  10px;
  border-radius: 5px;
`;

const Button = styled.button`
  border: 1px solid #d1d5db;
  background-color:rgb(127, 174, 230);
  padding: 12px  10px;
  border-radius: 15px;
  cursor: pointer;
`;

const Cancel = styled.p`
  margin-left: 15px;
  color: #ef4444; 
  cursor: pointer;
`;

export default function SongForm({
}) {
  return (
    <Form >
      <Heading>Add New Song</Heading>

      <Input
        type="text"
        placeholder="Title"
        value={title}
         />

      <Input
        type="text"
        placeholder="Artist"
        value={artist}
       />

      <Input
        type="text"
        placeholder="Album"
        value={album}
        />

      <Input
        type="number"
        placeholder="Year"
        value={year}
      />

      <Input
        type="text"
        placeholder="Genre"
        value={genre}
      />

      <Button type="submit">
       Add Song
      </Button>

      <Cancel>Cancel</Cancel>
    </Form>
  );
}
