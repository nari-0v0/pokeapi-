import { getRegExp } from 'korean-regexp';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectPokemonByRegExp } from '../RTK/selector';
import { Card } from '../component/Card';

export default function Search() {
  const [SearchParams] = useSearchParams();
  const param = SearchParams.get('pokemon'); // 검색어를 가져옴
  const reg = getRegExp(param); // 한글 검색을 위한 정규식 생성

  const pokemon = useSelector(selectPokemonByRegExp(reg));
  console.log(pokemon);

  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
