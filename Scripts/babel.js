const CATALOG_TEXT = "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."

const MAGNET_EARPHONES = [
    {
        id: 1,
        name: 'Микронаушник М-1',
        image: 'Content/Images/Goods/m-1.jpg',
        price: '1290',
        rent: '390',
        type: 'earphones',
        info: 'Магнитный, проводной микронаушник. Работает от батарейки KRONA – 4 часа. Оборудован гарнитурой с микрофоном и кнопкой приёма/сброса вызова.'
    },
    {
        id: 2,
        name: 'Микронаушник М-2',
        image: 'Content/Images/Goods/m-2.jpg',
        price: '1890',
        rent: '590',
        type: 'earphones',
        info: 'Магнитный проводной микронаушник с выводным сверхчувствительным микрофоном, кнопкой приема/сброса вызова и кнопкой-пищалкой. Абсолютная незаметность за счёт магнитных динамиков.'
    },
    {
        id: 3,
        name: 'Микронаушник М-3',
        image: 'Content/Images/Goods/m-3.jpg',
        price: '3390',
        rent: '790',
        type: 'earphones',
        info: 'Магнитный Bluetooth микронаушник. Работает со всеми телефонами с функцией Bluetooth от одного заряда 4 часа в активном использовании. Встроенный чувствительный микрофон, магниты на выбор – шарообразные/цилиндрические. Многофункциональная кнопка управления: 1 нажатие – сброс/приём вызова; 2 нажатия – набор последнего номера в журнале вызовов.'
    },
    {
        id: 4,
        name: 'Микронаушник М-4',
        image: 'Content/Images/Goods/m-4.jpg',
        price: '4390',
        rent: '890',
        type: 'earphones',
        info: 'Магнитный Bluetooth микронаушник с выводным микрофоном повышенной чувствительности. Беспроводная модель, совместима со всеми смартфонами с функцией Bluetooth. Обеспечивает 4 часа активного использования. Микронаушник оборудован многофункциональной клавишей, поддерживающей сброс/приём вызова и набор последнего номера в журнале вызовов, а также неодимовыми магнитами на выбор – шарообразные/цилиндрические.'
    },
    {
        id: 16,
        name: 'Микронаушник МR-1',
        image: 'Content/Images/Goods/mr-1.jpg',
        price: '9990',
        rent: '1590',
        type: 'earphones',
        info: 'Микронаушник MR-1 - магнитная модель на базе раций, оснащена выводным микрофоном и кнопкой приёма. Работает при подавителях сотовой связи благодаря расширенному диапазону радиочастот: 127-180 МГц, 380-524 МГц. Время активного использования: 12 часов. Дальность приёма/передачи сигнала: 3 км. Благодаря небольшим размерам: 100х52x32 мм, с лёгкостью помещается в карман женского и мужского пиджаков. Неодимовые магниты на выбор – шарообразные/цилиндрические.'
    }
];

const CAPSULE_EARPHONES = [
    {
        id: 5,
        name: 'Микронаушник К-1',
        image: 'Content/Images/Goods/k-1.jpg',
        price: '1990',
        rent: '590',
        type: 'earphones',
        info: 'Kапсульный, проводной микронаушник. Крепкие провода обеспечивают надёжность соединения, а тонкая петля обеспечивает незаметность и удобство ношения. Оборудован гарнитурой со встроенным чувствительным микрофоном.'
    },
    {
        id: 6,
        name: 'Микронаушник К-2',
        image: 'Content/Images/Goods/k-2.jpg',
        price: '2590',
        rent: '690',
        type: 'earphones',
        info: 'Капсульный проводной микронаушник с выводным микрофоном повышенной чувствительности, кнопкой-пищалкой, кнопкой приема/сброса вызова. Оборудован капсулой 7 мм, обеспечивающей чистый звук.'
    },
    {
        id: 7,
        name: 'Микронаушник К-3',
        image: 'Content/Images/Goods/k-3.jpg',
        price: '3390',
        rent: '790',
        type: 'earphones',
        info: 'Капсульный Bluetooth микронаушник. Работает со всеми телефонами с функцией Bluetooth от одного заряда 4 часа в активном использовании. Встроенный чувствительный микрофон, капсула с кристальным звуком 7 мм. Многофункциональная кнопка управления: 1 нажатие – сброс/приём вызова; 2 нажатия – набор последнего номера в журнале вызовов.'
    },
    {
        id: 8,
        name: 'Микронаушник К-4',
        image: 'Content/Images/Goods/k-4.jpg',
        price: '4490',
        rent: '990',
        type: 'earphones',
        info: 'Капсульный Bluetooth микронаушник с выводным микрофоном повышенной чувствительности. Беспроводная модель, совместима со всеми смартфонами с функцией Bluetooth. Обеспечивает 4 часа активного использования. Микронаушник оборудован многофункциональной клавишей, поддерживающей сброс/приём вызова и набор последнего номера в журнале вызовов, а также самой маленькой анатомической капсулой.'
    },
    {
        id: 14,
        name: 'Микронаушник KB-1',
        image: 'Content/Images/Goods/kb-1.jpg',
        price: '5490',
        rent: '1290',
        type: 'earphones',
        info: 'Капсульная bluetooth модель в компактном форм-факторе. Увеличенный аккумулятор обеспечивает 6 часов активного использования. За счёт небольших размеров: 60х35х15 мм и отсутствия проводов удобно располагается в кармане пиджака, нагрудном кармане рубашки, бюстгальтере, а встроенный микрофон обеспечивает отличную слышимость. Оборудован многофункциональной клавишей и удобной капсулой 7 мм. '
    },
    {
        id: 15,
        name: 'Микронаушник KR-1',
        image: 'Content/Images/Goods/kr-1.jpg',
        price: '10900',
        rent: '1790',
        type: 'earphones',
        info: 'Микронаушник KR-1 - капсульная модель на базе раций, оснащена выводным микрофоном и кнопкой приёма. Комплект высокоэффективен против любых глушилок благодаря расширенному диапазону радиочастот: 127-180 МГц, 380-524 МГц. Время активного использования: 12 часов. Дальность приёма/передачи сигнала: 3 км. Благодаря небольшим размерам: 100х52x32 мм, с лёгкостью помещается в карман женского и мужского пиджаков. В комплект входит капсула 7 мм, которая имеет отличную громкость, чёткость и качество звучания.'
    }
];

const COMPONENTS = [
    {
        id: 12,
        name: 'Батарейка SONY',
        image: 'Content/Images/Goods/battery_sony.jpg',
        price: '90',
        rent: null,
        type: 'component',
        info: 'Батарейка SONY SR416SW 337- качественный элемент питания для капсулы микронаушников. Время работы – 4 часа непрерывного подключения.'
    },
    {
        id: 9,
        name: 'Капсула',
        image: 'Content/Images/Goods/capsule.jpg',
        price: '1690',
        rent: '390',
        type: 'component',
        info: 'Микродинамик направленного звучания для капсульного микронаушника 7 мм. Время работы от одной батарейки - 4 часа. Капсуль конусообразной формы гарантирует сохранение заданной глубины и не даёт микронаушнику погружаться дальше, предохраняя слуховой канал от повреждений, а чистый звук обеспечивает прекрасную слышимость.'
    },
    {
        id: 13,
        name: 'Батарейка KRONA',
        image: 'Content/Images/Goods/battery_krona.jpg',
        price: '90',
        rent: null,
        type: 'component',
        info: 'Солевая батарейка KRONA для проводного магнитного микронаушника. Время работы – 4 часа непрерывного подключения.'
    },
    {
        id: 11,
        name: 'Комплект',
        image: 'Content/Images/Goods/4magnets.jpg',
        price: '390',
        rent: null,
        type: 'component',
        info: 'Комплект запасных частей для магнитного микронаушника. Включает в себя четыре качественных неодимовых магнита на выбор: шарообразные/цилиндрические; инжектор; извлекатель'
    },
    {
        id: 10,
        name: 'Гарнитура',
        image: 'Content/Images/Goods/garnitura.jpg',
        price: '300',
        rent: '190',
        type: 'component',
        info: 'Гарнитура со встроенным чувствительным микрофоном и многофункциональной кнопкой управления: 1 нажатие – сброс/приём вызова; 2 нажатия – набор последнего номера в журнале вызовов. Совместима с android и ios-устройствами.'
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
        else if (this.props.rent == null) {
            return (
                <div className="product-price">
                    <h3 className="product-title">{this.props.name}</h3>
                    <div className="container-price">
                        <div className="row">
                            <div className="col-rest">
                                <p><small>Покупка <strong>{this.props.price}</strong> руб</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
});

var Item = React.createClass({
    render: function () {
        // var className_string = this.props.type === 'component' ? 'col-xs-12 col-sm-6 col-md-12 product wow fadeIn' : 'col-xs-12 product wow fadeIn';
        return (
            <div className={this.props.type == 'component' ? 'col-xs-12 col-sm-6 col-md-12 product wow fadeIn' : 'col-xs-12 product wow fadeIn'}>
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
                    price={this.props.price}
                    rent={this.props.rent}
                />
            </div>
        );
    }
});

var GoodsList = React.createClass({
    render: function () {
        return (
            <div className="">
                <div className="row">
                    <h1 className="wow fadeIn"><span className="gray">НАШ</span> КАТАЛОГ</h1>
                    <p className="margin-top40 wow fadeIn">{CATALOG_TEXT}</p>
                </div>
                <div className="row goods">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="col-xs-12">
                            <h3 className="category-header">Капсульные</h3>
                        </div>
                        {
                            MAGNET_EARPHONES.map(function (el) {
                                return <Item
                                    key={el.id}
                                    name={el.name}
                                    image={el.image}
                                    price={el.price}
                                    rent={el.rent}
                                    info={el.info}
                                    type={el.type}
                                />;
                            })
                        }
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="col-xs-12">
                            <h3 className="category-header">Магнитные</h3>
                        </div>
                        {
                            CAPSULE_EARPHONES.map(function (el) {
                                return <Item
                                    key={el.id}
                                    name={el.name}
                                    image={el.image}
                                    price={el.price}
                                    rent={el.rent}
                                    info={el.info}
                                    type={el.type}
                                />;
                            })
                        }
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="col-xs-12">
                            <h3 className="category-header">Комплектующие</h3>
                        </div>
                        {
                            COMPONENTS.map(function (el) {
                                return <Item
                                    key={el.id}
                                    name={el.name}
                                    image={el.image}
                                    price={el.price}
                                    rent={el.rent}
                                    info={el.info}
                                    type={el.type}
                                />;
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <GoodsList />,
    document.getElementById("catalog")
);