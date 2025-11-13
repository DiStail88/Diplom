import PopExit from '../../components/PopExit/PopExit';

const PopExitPage = () => {
  const handleClose = () => {
    console.log('Закрытие не используется на странице');
  };

  return <PopExit onClose={handleClose} />;
};

export default PopExitPage;
