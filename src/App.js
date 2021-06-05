import React, { useState, useEffect } from 'react'
import Card from './components/card/Card';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Card title="Coupon 1" imgsrc="https://images.prismic.io/smallexchange-com/21260cc6-c545-4571-8f59-cd96052b327e_SMFE_Site_Buttons-SMALL%403x.png?auto=compress%2Cformat" desc="hidden coupon code inside it. press the button below. code will visible for 10 sec." couponcode="CDR432"/>
        <Card title="Coupon 2" imgsrc="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" desc="hidden coupon code inside it. press the button below" couponcode="MTR652"/>
        <Card title="Coupon 3" imgsrc="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg" desc="hidden coupon code inside it. press the button below" couponcode="GTR222"/>
        <Card title="Coupon 4" imgsrc="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" desc="hidden coupon code inside it. press the button below" couponcode="AFR123"/>
        <Card title="Coupon 5" imgsrc="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270" desc="hidden coupon code inside it. press the button below" couponcode="WER007"/>
        <Card title="Coupon 6" imgsrc="https://media.istockphoto.com/photos/the-african-king-picture-id492611032?k=6&m=492611032&s=612x612&w=0&h=Y_CHJCbkFOqmXvHOYSdxu0T5UZqoRj7OzpIBLGkvf_Q=" desc="hidden coupon code inside it. press the button below" couponcode="YTP886"/>
        

        <Card title="Coupon 7" imgsrc="https://thebhakti.com/wp-content/uploads/2019/01/shri-ji-.jpg" desc="hidden coupon code inside it. press the button below" couponcode="VDS444"/>
        <Card title="Coupon 8" imgsrc="https://image.shutterstock.com/image-photo/newly-constructed-monastery-siliguri-by-260nw-1471401134.jpg" desc="hidden coupon code inside it. press the button below" couponcode="MIX469"/>
        <Card title="Coupon 9" imgsrc="https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/stock/stock-riverflow1-720x522.jpg.img.jpg" desc="hidden coupon code inside it. press the button below" couponcode="NIK998"/>
        <Card title="Coupon 10" imgsrc="https://www.freedigitalphotos.net/images/img/homepage/394230.jpg" desc="hidden coupon code inside it. press the button below" couponcode="RKD330"/>
        <Card title="Coupon 11" imgsrc="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" desc="hidden coupon code inside it. press the button below" couponcode="TJK556"/>
        <Card title="Coupon 12" imgsrc="https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg" desc="hidden coupon code inside it. press the button below" couponcode="FHJ331"/>

      </div>
    </div>
  );
}

export default App;
