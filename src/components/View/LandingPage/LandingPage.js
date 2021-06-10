import React, { useState, useEffect } from 'react';
import NewStores from './NewStores';
import SectionHeader from '../../../components/SectionHeader/Title';
import GridRandom from '../../Grid/GridRandom';
import Loading from '../../Loading';

import Airtable from 'airtable';

import './LandingPage.css';

import Slide from '../../Swiper/Slide';
import '../../Swiper/SlideWrapper.css';

const base = new Airtable({ apiKey: 'key5AMdi7ejadTzUy' }).base(
  'appDzyBPyX5MjMkrU'
);

const LandingPage = () => {
  const [mainStores, setMainStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(false);

  const mainStore = [];

  const fetchStores = () => {
    setLoading(true);
    base('stores')
      .select({
        maxRecords: 120,
        pageSize: 30,
        view: 'Grid view',
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            mainStore.push({
              id: record.id,
              ...record._rawJson.fields,
            });
          });
          setMainStores(mainStore);
          setLoading(false);
          fetchNextPage();
        },
        function done(err) {
          console.log('메인 데이터 로딩 완료');
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  };

  useEffect(() => {
    fetchStores();
  }, []);

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      // console.log(`innerHeight ${window.innerHeight}`);
      // console.log(`scrollY ${window.scrollY}`);
      // console.log(`body height ${document.body.scrollHeight}`);
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 2
      ) {
        // setPage((oldPage) => {
        //   return oldPage + 1;
        // });
        setPage(true);
        console.log('작업중');
      }
    });
    return () => window.removeEventListener('scroll', event);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <NewStores></NewStores>
      <SectionHeader title='인기카페 ✨' desc='원주 최고의 인기카페' />
      <div className='slide'>
        {mainStores.map((store) => {
          if (store.firstCategory[0] === '카페') {
            return <Slide key={store.id} store={store}></Slide>;
          } else return null;
        })}
      </div>

      <SectionHeader title='오늘의 맛집 🍛' desc='원쥴랭 추천 맛집' />

      <div className='slide'>
        {mainStores.map((store) => {
          if (store.firstCategory[0] === '맛집') {
            return <Slide key={store.id} store={store}></Slide>;
          } else return null;
        })}
      </div>
      <SectionHeader title='GEM💎' desc='원주 실시간 맛집, 카페' />

      <GridRandom filter='카페' filter2='맛집' stores={mainStores} />
      {loading && <h2 className='loading'>loading...</h2>}
    </>
  );
};

export default LandingPage;
