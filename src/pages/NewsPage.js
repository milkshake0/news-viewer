import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({ match }) => {
  //카테고리가 선택되지 않았으면 기본값 all로 사용
  //Categories 컴포넌트에서 'all'이면 to="/"로 설정함.
  const category = match.params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
