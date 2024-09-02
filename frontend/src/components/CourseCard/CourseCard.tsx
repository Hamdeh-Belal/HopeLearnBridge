import {
  ButtonContainer,
  CardCover,
  DeleteButton,
  EditButton,
  StyledCard,
} from './CourseCard.style';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  CARD_DEFAULT_IMG_TEST_ID,
  CARD_IMG_TEST_ID,
  CARD_TEST_ID,
  CourseCardProps,
} from './CourseCard.const';
import { Card } from 'antd';
import { FC } from 'react';
import DefaultImg from '../../images/book.svg?react';
const { Meta } = Card;

const CourseCard: FC<CourseCardProps> = ({
  title,
  description,
  cardImg: CardImg,
  className,
}) => {
  return (
    <StyledCard
      data-testid={CARD_TEST_ID}
      cover={
        <CardCover>
          {CardImg ? (
            <CardImg className={className} data-testid={CARD_IMG_TEST_ID} />
          ) : (
            <DefaultImg
              className={className}
              data-testid={CARD_DEFAULT_IMG_TEST_ID}
            />
          )}
        </CardCover>
      }
    >
      <Meta title={title} description={description} />
      <ButtonContainer>
        <EditButton block>
          <EditOutlined />
        </EditButton>
        <DeleteButton block>
          <DeleteOutlined />
        </DeleteButton>
      </ButtonContainer>
    </StyledCard>
  );
};

export default CourseCard;