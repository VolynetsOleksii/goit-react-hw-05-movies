import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';
import { Button, Form, Input, Wrapper } from './Searchbar.styled';
import { toast } from 'react-toastify';

export const Searchbar = ({ onSubmit }) => {
  const handleFormSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.query.value;

    if (!query) {
      toast.info('Please enter something!');

      return;
    }

    onSubmit(query);
    e.target.reset();
  };
  return (
    <Wrapper>
      <Form onSubmit={handleFormSubmit}>
        <Button type="submit">
          <FcSearch size={18} />
        </Button>

        <Input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </Form>
    </Wrapper>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
