(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{325:function(a,r,t){"use strict";t.r(r);var v=t(2),s=Object(v.a)({},function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"руководство-по-настройке-v2ray"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#руководство-по-настройке-v2ray","aria-hidden":"true"}},[a._v("#")]),a._v(" Руководство по настройке V2Ray")]),a._v(" "),t("h2",{attrs:{id:"отказ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#отказ","aria-hidden":"true"}},[a._v("#")]),a._v(" отказ")]),a._v(" "),t("p",[a._v("Этот репозиторий является веткой "),t("code",[a._v("ToutyRater / v2ray-guide")]),a._v(", спасибо, что помогли многим людям пересечь GFW.")]),a._v(" "),t("p",[a._v("Поскольку мы хотим сделать [оригинальное руководство по V2Ray] (https://github.com/ToutyRater/v2ray-guide) более ухоженным и актуальным, а также многоязычным, мы раздвоили этот новый репозиторий. , Вы можете поделиться своим опытом, переводом и исправлением этого документа, открыв выпуск. Кроме того, если вы хотите помочь нам вычитать этот перевод, пожалуйста, не стесняйтесь открывать вопрос.")]),a._v(" "),t("p",[a._v("Документы теперь лицензированы в соответствии с [BY-CC 4.0] ("),t("code",[a._v("LICENSE.md")]),a._v(").")]),a._v(" "),t("h2",{attrs:{id:"введение"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#введение","aria-hidden":"true"}},[a._v("#")]),a._v(" Введение")]),a._v(" "),t("p",[a._v("V2Ray - это инструмент в рамках проекта V. Проект V - это проект, который включает в себя набор инструментов для построения определенных сетевых сред, а V2Ray является основным. В руководстве по Project V сказано, что Project V - это набор инструментов, которые помогут вам создать собственную сеть конфиденциальности через Интернет. Ядро Project V, названное V2Ray, отвечает за сетевые протоколы и связь. Он может работать как автономно, так и в сочетании с другими инструментами. Однако с точки зрения времени запуска Project V имеет приоритет перед V2Ray. Если вы все еще не понимаете, то мы просто говорим, V2Ray - это аналог прокси-сервера для Shadowsocks. V2Ray может быть использован для доступа в Интернет (через цензуру), чтобы изучить передовые науки и технологии из бесплатного Интернета. ``")]),a._v(" "),t("p",[a._v("V2Ray Руководство пользователя:")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.v2ray.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.v2ray.com"),t("OutboundLink")],1),a._v(" (Has been blocked in China)")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://v2fly.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://v2fly.org"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("Адрес хранилища V2Ray: "),t("a",{attrs:{href:"https://github.com/v2ray/v2ray-core",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/v2ray/v2ray-core"),t("OutboundLink")],1),a._v(" Адрес хранилища V2Ray (хранилище V2Fly): "),t("a",{attrs:{href:"https://github.com/v2fly/v2ray-core",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com /v2ray/v2ray-core"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("Дискуссионная группа пользователей V2Ray Telegram: "),t("a",{attrs:{href:"https://t.me/v2fly_chat",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://t.me/projectv2ray"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"частые-вопросы-q-a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#частые-вопросы-q-a","aria-hidden":"true"}},[a._v("#")]),a._v(" Частые вопросы: Q & A")]),a._v(" "),t("h4",{attrs:{id:"в-чем-разница-между-v2ray-и-shadowsocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#в-чем-разница-между-v2ray-и-shadowsocks","aria-hidden":"true"}},[a._v("#")]),a._v(" В чем разница между V2Ray и Shadowsocks?")]),a._v(" "),t("p",[a._v("Разница все еще в том, что Shadowsocks - простой прокси-инструмент; это протокол шифрования. Тем не менее, V2Ray разработан как платформа, и любой разработчик может использовать модули, предоставляемые V2Ray, для разработки нового прокси-программного обеспечения.")]),a._v(" "),t("p",[a._v("Любой, кто знаком с историей Shadowsocks, должен знать, что это самоиспользуемое программное обеспечение, разработанное clowwindy. Первоначальная цель разработки - сделать так, чтобы было проще и эффективнее пересекать межсетевой экран и цензуру. До того, как clowwindy создал Shadowsocks с открытым исходным кодом, он долгое время использовался в качестве частного прокси-протокола. Принимая во внимание, что V2Ray был разработан после того, как clowwindy получил угрозу от правительства Китая, команда Project V была разработана в знак протеста.")]),a._v(" "),t("p",[a._v("Из-за различных исторических предпосылок при рождении, они имеют разные особенности.")]),a._v(" "),t("p",[a._v("Проще говоря, Shadowsocks - это протокол с одним прокси, а V2Ray сложнее, чем прокси с одним протоколом. Звучит немного мрачно для Shadowsocks? конечно нет! С другой стороны, Shadowsocks просты в развертывании, а V2Ray имеет более сложные конфигурации при развертывании.")]),a._v(" "),t("h4",{attrs:{id:"поскоnьку-v2ray-сnожнее-зачем-мы-его-испоnьзуем"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#поскоnьку-v2ray-сnожнее-зачем-мы-его-испоnьзуем","aria-hidden":"true"}},[a._v("#")]),a._v(" Поскольку V2Ray сложнее, зачем мы его используем?")]),a._v(" "),t("p",[a._v("Преимущества и недостатки чего-то всегда приходят вместе. Например, V2Ray имеет следующие преимущества:")]),a._v(" "),t("ul",[t("li",[a._v("** Новый и мощный протокол: ** V2Ray использует новый протокол VMess, разработанный самим собой, который улучшает некоторые из существующих недостатков Shadowsocks и его труднее обнаружить с помощью брандмауэра.")]),a._v(" "),t("li",[a._v("** Лучшая производительность: ** Лучшая производительность сети, конкретные данные можно увидеть [официальный блог V2Ray] (https://steemit.com/cn/@v2ray/3cjiux)")]),a._v(" "),t("li",[a._v("** Дополнительные функции: ** Ниже приведены некоторые функции V2Ray:\n"),t("ul",[t("li",[a._v("mKCP: реализация протокола KCP на V2Ray, вам не нужно устанавливать другой kcptun.")]),a._v(" "),t("li",[a._v("Динамический порт: динамическое изменение порта связи для борьбы с ограничением скорости в порту с большим длительным трафиком")]),a._v(" "),t("li",[a._v("Функции маршрутизации: вы можете свободно устанавливать направление потока указанного пакета данных, блокировать рекламу и включать анти-трекинг")]),a._v(" "),t("li",[a._v("Исходящий прокси, или, скажем, цепочечный прокси, использует много ссылок для лучшей конфиденциальности")]),a._v(" "),t("li",[a._v("Запутывание: аналогично запутыванию ShadowsocksR, и пакет данных для mKCP также может быть запутан. Запутывание трафика пакетами другого трафика протокола, что делает проверку более сложной")]),a._v(" "),t("li",[a._v("Протокол WebSocket: используйте только прокси-сервер WebSocket или промежуточный прокси-сервер CDN (лучше антиблокировка)")]),a._v(" "),t("li",[a._v("Mux: мультиплексирование, дальнейшее улучшение одновременной работы прокси")])])])]),a._v(" "),t("h4",{attrs:{id:"там-нет-серебряной-пуnи"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#там-нет-серебряной-пуnи","aria-hidden":"true"}},[a._v("#")]),a._v(" Там нет серебряной пули")]),a._v(" "),t("p",[a._v("На данный момент V2Ray имеет следующие недостатки:")]),a._v(" "),t("ul",[t("li",[a._v("Сложная конфигурация")]),a._v(" "),t("li",[a._v("Отсутствие сторонних клиентов и услуг")])]),a._v(" "),t("h4",{attrs:{id:"кажется-v2ray-хорош-но-я-просто-хочу-пересечь-интернет-цензуру-не-хочу-тратить-сnишком-много-времени-как-я-могу-сдеnать"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#кажется-v2ray-хорош-но-я-просто-хочу-пересечь-интернет-цензуру-не-хочу-тратить-сnишком-много-времени-как-я-могу-сдеnать","aria-hidden":"true"}},[a._v("#")]),a._v(" Кажется, V2Ray хорош, но я просто хочу пересечь интернет-цензуру, не хочу тратить слишком много времени. Как я могу сделать?")]),a._v(" "),t("p",[a._v("Неважно, что вы делаете, есть усилие. Усилие не означает успех, но никакие усилия определенно не предполагают никакой выгоды. Но если ваше требование относительно простое, вы можете найти VPN, а не развертывать V2Ray самостоятельно.")]),a._v(" "),t("h4",{attrs:{id:"я-решиn-попробовать-развернуть-v2ray-так-как-я-могу-сnедовать-этому-руководству"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#я-решиn-попробовать-развернуть-v2ray-так-как-я-могу-сnедовать-этому-руководству","aria-hidden":"true"}},[a._v("#")]),a._v(" Я решил попробовать развернуть V2Ray, так как я могу следовать этому руководству?")]),a._v(" "),t("p",[a._v("Руководство пользователя V2Ray объясняет все очень подробно. В этом руководстве в основном объясняются возможности V2Ray от простого к сложному в практически доступных конфигурациях, а также делается попытка уменьшить сложность для новичков, использующих V2Ray.")]),a._v(" "),t("p",[a._v("** У пользователей этого руководства должен быть опыт работы с оболочкой Linux, например, как купить VPS, как войти в VPS через SSH, как использовать nano (или vim) для редактирования текста и некоторые основные команды Linux. Есть много руководств онлайн. Нет необходимости повторять их и писать учебник. Если у вас нет опыта, настоятельно рекомендуем вам изучить их заранее, а затем развернуть V2Ray. **")]),a._v(" "),t("p",[a._v("Это руководство можно рассматривать как простую версию руководства пользователя V2Ray или как практическое руководство по V2Ray.")]),a._v(" "),t("p",[a._v("Вы можете следовать инструкциям в этом руководстве для сборки V2Ray, не читая это руководство пользователя, но мы не рекомендуем его. Потому что это руководство просто поможет вам настроить V2Ray. Есть определенные сочетания клавиш по сравнению с руководством пользователя, и что-то игнорируется. Поэтому мы надеемся, что все потратят на прочтение руководства пользователя V2Ray.")]),a._v(" "),t("h4",{attrs:{id:"на-что-я-доnжен-обратить-внимание-тоnько-начинающий-испоnьзовать-v2ray"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#на-что-я-доnжен-обратить-внимание-тоnько-начинающий-испоnьзовать-v2ray","aria-hidden":"true"}},[a._v("#")]),a._v(" На что я должен обратить внимание, только начинающий использовать V2Ray?")]),a._v(" "),t("p",[a._v("Поскольку многие пользователи V2Ray имеют опыт работы с Shadowsocks, они могут в основном использовать V2Ray как Shadowsocks. Тем не менее, V2Ray не совсем то же самое, что Shadowsocks, так что мы представим различия в использовании. Обратите внимание, что разница не означает хорошо или плохо. Рекомендуется выбрать конфигурацию, соответствующую вашей сетевой среде.")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Клиент: V2Ray сам по себе является просто ядром. GUI-клиент V2Ray - это в основном оболочка, называемая ядром V2Ray, похожая на отношения между ядром Linux и операционной системой Linux. Но многие клиенты Shadowsocks повторно реализовали протокол автора. Содержание этой статьи не предполагает использования клиентов с графическим интерфейсом в данный момент.")])]),a._v(" "),t("li",[t("p",[a._v("Политический прокси: возможно, первое воображение - это PAC. Будь то Shadowsocks (в частности, Shadowsocks-libev) или V2Ray сами не поддерживают PAC, он контролируется клиентом пользователя. В то время как Shadowsocks использует ACL, V2Ray использует свою функцию маршрутизации, и мы не говорим, хорошо это или плохо. Вы можете выбрать лучший, зависит от вас.")])]),a._v(" "),t("li",[t("p",[a._v("Поделиться ссылкой / QR-кодом: V2Ray не имеет унифицированного формата URL, как Shadowsocks, поэтому общая ссылка / QR-код каждого графического клиента V2Ray не обязательно является универсальной. Тем не менее, мы работаем над реализацией протокола протокола конечной точки V2Ray. Он предоставит универсальную ссылку для клиентов V2Ray.")])]),a._v(" "),t("li",[t("p",[a._v("Шифрование: V2Ray (в частности, протокол VMess) не любит Shadowsocks, который подчеркивает выбор шифрования, а шифрование VMess определяется клиентом, а сервер адаптивен.")])]),a._v(" "),t("li",[t("p",[a._v("Время: при использовании протокола VMess от V2Ray необходимо обеспечить точное время как для клиента, так и для сервера, поскольку это для безопасного проектирования.")])]),a._v(" "),t("li",[t("p",[a._v("Пароль: V2Ray (VMesss) использует только UUID, который действует как пароль Shadowsocks, но случайность намного лучше, чем пароль Shadowsocks, но его неудобно запоминать (противоречие безопасности и удобства).")])]),a._v(" "),t("li",[t("p",[a._v("UDP relay: VMess - это потоковый протокол на основе TCP. Для пакетов UDP VMess будет преобразован в поток TCP, а затем ретранслирует пакеты, то есть UDP через TCP. Чтобы включить UDP, вы можете включить UDP в протоколе socks клиента. Однако обратите внимание, что это не очень хорошо для ускорения игры.")])]),a._v(" "),t("li",[t("p",[a._v("Прокси шлюза: На самом деле они ничем не отличаются. Не думайте, что вы не сможете использовать их на роутере без плагинов.")])])])])},[],!1,null,null,null);r.default=s.exports}}]);