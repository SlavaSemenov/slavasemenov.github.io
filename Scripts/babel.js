var GOODS = [
    {
        id: 1,
        name: 'Микронаушник М-1',
        image: '../Content/Images/Goods/m-1.jpg',
        price: '1290',
        rent: '400',
        info: 'Магнитный, проводной микронаушник. Работает от батарейки KRONA – 4 часа. Оборудован гарнитурой с микрофоном и кнопкой приёма/сброса вызова.'
    },
    {
        id: 2,
        name: 'Микронаушник М-2',
        image: '../Content/Images/Goods/m-2.jpg',
        price: '1890',
        rent: '600',
        info: 'Магнитный проводной микронаушник с выводным микрофоном повышенной чувствительности, кнопкой-пищалкой, кнопкой сброса/приема вызова и кристальным звуком.'
    },
    {
        id: 3,
        name: 'Микронаушник М-3',
        image: '../Content/Images/Goods/m-3.jpg',
        price: '2890',
        rent: '800',
        info: 'Магнитный Bluetooth микронаушник. Работает со всеми телефонами с функцией Bluetooth от одного заряда 4 часа.'
    },
    {
        id: 4,
        name: 'Микронаушник М-4',
        image: '../Content/Images/Goods/m-4.jpg',
        price: '3390',
        rent: '900',
        info: 'Магнитный Bluetooth микронаушник с выводным микрофоном повышенной чувствительности, кнопкой-пищалкой, кнопкой сброса/приема вызова и кристальным звуком. Беспроводная модель, работает со всеми телефонами с функцией Bluetooth от одного заряда - 4 часа.'
    },
    {
        id: 5,
        name: 'Микронаушник К-1',
        image: '../Content/Images/Goods/k-1.jpg',
        price: '1990',
        rent: '600',
        info: 'Kапсульный, проводной микронаушник. Крепкие провода обеспечивают надёжность соединения, а тонкая петля позволяет скрыть её под одеждой.'
    },
    {
        id: 6,
        name: 'Микронаушник К-2',
        image: '../Content/Images/Goods/k-2.jpg',
        price: '2590',
        rent: '700',
        info: 'Капсульный проводной микронаушник с выводным микрофоном повышенной чувствительности, кнопкой-пищалкой, кнопкой сброса/приема вызова и кристальным звуком.'
    },
    {
        id: 7,
        name: 'Микронаушник К-3',
        image: '../Content/Images/Goods/k-3.jpg',
        price: '2990',
        rent: '800',
        info: 'Капсульный Bluetooth микронаушник. Работает со всеми телефонами с функцией Bluetooth от одного заряда 4 часа. В наличии черные и белые модели.'
    },
    {
        id: 8,
        name: 'Микронаушник К-4',
        image: '../Content/Images/Goods/k-4.jpg',
        price: '3490',
        rent: '1000',
        info: 'Капсульный Bluetooth микронаушник с выводным микрофоном повышенной чувствительности, кнопкой-пищалкой, кнопкой сброса/приема вызова и кристальным звуком. Беспроводная модель, работает со всеми телефонами с функцией Bluetooth от одного заряда - 4 часа.'
    },
    {
        id: 9,
        name: 'Капсула',
        image: '../Content/Images/Goods/capsule.jpg',
        price: '1500',
        rent: '200',
        info: 'Микродинамик направленного звучания для капсульного микронаушника. Время работы от одной батарейки 4 часа.'
    },
    {
        id: 10,
        name: 'Гарнитура',
        image: '../Content/Images/Goods/garnitura.jpg',
        price: '300',
        rent: null,
        info: 'Гарнитура с микрофоном и кнопкой приёма/сброса вызова. Совместима с android и apple-устройствами.'
    },
    {
        id: 11,
        name: 'Комплект',
        image: '../Content/Images/Goods/4magnets.jpg',
        price: '250',
        rent: null,
        info: 'Комплект запасных частей для магнитного микронаушника: 4 магнита: 2 маленьких: 1*3 мм и 2 больших: 2*3 мм; Инжектор; Извлекатель'
    },
    {
        id: 12,
        name: 'Батарейка SONY',
        image: '../Content/Images/Goods/battery_sony.jpg',
        price: '90',
        rent: null,
        info: 'Батарейка SONY 337 для капсульного микронаушника. Время работы – 3-4 часа непрерывного подключения.'
    },
    {
        id: 13,
        name: 'Батарейка KRONA',
        image: '../Content/Images/Goods/battery_krona.jpg',
        price: '90',
        rent: null,
        info: 'Щелочная батарейка типа KRONA для проводного магнитного микронаушника. Время работы – 3-4 часа непрерывного подключения.'
    }
];

var Price = React.createClass({
    render: function () {
        if (this.props.rent != null) {
            return (
                <div className="product-price">
                    <h3 className="product-title">{this.props.name}</h3>
                    <div className="container-price">
                        <div className="row">
                            <div className="col-rest">
                                <p><small>Покупка <strong>{this.props.price}</strong> руб</small></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-rest">
                                <p><small>Аренда <strong>{this.props.rent}</strong> руб/сутки</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else if(this.props.rent == null){
            return (
                <div className="container-price">
                    <div className="row">
                        <div className="col-rest">
                            <p><small>Покупка <strong>1500</strong> руб</small></p>
                        </div>
                    </div>
                </div>
            );
        }
    }
});

var Item = React.createClass({
    render: function () {
            return (
                <div className="col-md-4 col-sm-6 col-xs-12 product wow fadeIn">
                    <div className="product-boards">
                        <img src={this.props.image} className="product-img" alt="" />
                        <div className="product-info">
                            <h3 className="product-title">{this.props.name}</h3>
                            <div className="container-fluid">
                                <div className="row">
                                    <h4 className="product-information">{this.props.info}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Price 
                        name={this.props.name}
                        price = {this.props.price}
                        rent = {this.props.rent}
                    />
                </div>
            );
    }
});

var GoodsList = React.createClass({
    render: function(){
        return (
            <div className="">
                <div className="row">
                    <h1 className="wow fadeInDown"><span className="gray">НАШ</span> КАТАЛОГ</h1>
                    <p className="margin-top40 wow fadeInDown">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
                </div>
                <div className="row goods">
                    {
                        GOODS.map(function(el) {
                            return <Item
                                key={el.id}
                                name={el.name}
                                image={el.image}
                                price={el.price}
                                rent={el.rent}
                                info={el.info}
                            />;
                        })
                    }
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <GoodsList />,
    document.getElementById("catalog")
);