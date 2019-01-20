import Vue from 'vue'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import hotelList from '@/components/hotel-list'
import {shallowMount} from '@vue/test-utils';

window.axios = axios;

describe('Hotel List Component', () => {

  // testing if the component initialized successfully
  it('should be there', () => {
    const wrapper = shallowMount(hotelList, {});
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  // testing the API call
  it('shoud get data from the API', (cb) => {
    const axiosMock = new MockAdapter(axios);
    const wrapper = shallowMount(hotelList);
    const HotelData = [
      {
        "id": 37681,
        "name": "Hilton Sharm",
        "totalReviews": 1678,
        "totalScore": 8.5,
        "pricePerNight": 180,
        "photo": "http://picsum.photos/100/100/?image=109"
      },
      {
        "id": 18671,
        "name": "Sheraton Sharm",
        "totalReviews": 78,
        "totalScore": 9,
        "pricePerNight": 80,
        "photo": "http://picsum.photos/100/100/?image=110"
      },
      {
        "id": 27861,
        "name": "Grand Hayatt Sharm",
        "totalReviews": 678,
        "totalScore": 7,
        "pricePerNight": 300,
        "photo": "http://picsum.photos/100/100/?image=112"
      }
    ];

    axiosMock.onGet('http://my-json-server.typicode.com/fly365com/code-challenge/hotels')
      .reply(200, HotelData);

    // expecting the mounted Component data to equal the example data
    expect(wrapper.vm.hotelInfo).toEqual([]);

    setTimeout(() => {
      expect(wrapper.vm.hotelInfo).toEqual(HotelData);
      cb();
    });
  })

  // testing the inut number value to be number
  it('should have Class Active when click',()=>{
    const wrapper = shallowMount(hotelList);
    const showDet =  wrapper.findAll( 'hotels-card-more')
    showDet.trigger('click');
    expect(showDet.parent.classes()).toContain('active')
  })

  //todo : More Test Cases
});






