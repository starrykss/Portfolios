import { useLayoutEffect } from 'react';

import { MEALS, CATEGORIES } from '../data/dummy-data';

import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId; // 파라미터 값 가져오기

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0; // 데이터가 있는 항목만 필터링
  });

  // 동적으로 스크린 이름 지정하기
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
