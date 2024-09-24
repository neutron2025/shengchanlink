
import './App.css';
import MovingTriangle from './MovingTriangle';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';



function App() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 mt-2 my-16 font-sans text-gray-800">
      {/* <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-gray-800 ">生产力所有权证明，关于其分配制度及使用</h1>
        <p className="my-10 text-2xl text-gray-600 ">白皮书</p>
      </header> */}

<header className="text-center mb-8 sm:mb-12 ">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-gray-800">
    生产力所有权证明，关于其分配制度及使用
  </h1>
  <p className="my-4 sm:my-6 md:my-10 font-bold font-mono text-xl sm:text-2xl text-gray-600">
    白皮书
  </p>
</header>
      <main className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. 引言</h2>
          <p className="text-base">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            当今世界，人类社会正面临着前所未有的挑战和变革。随着科技的飞速发展，
            生产力得到了前所未有的提升，但与此同时，资源分配不均、贫富差距问题
            也日益凸显。为了解决这些问题，我们需要一种新模式，一种能够实现
            资源优化配置、促进社会公平正义、推动可持续发展的模式。
          </p>
                      
            
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">2. 生产力所有权证明</h2>
          <MovingTriangle />
          <p className="text-base">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生产力所有权证明，也称为生产力权证，是对消费者在购买产品后，随着产品价值的损失
          对消费者给予补偿的一种制度。举个例子，一个苹果，人吃与不吃它，是没有区别的，吃它就是滋养了人类，不吃它就腐烂滋养了微生物。于大自然而言，微生物和人类都是自然内循环的一部分而已，
          并没有区别。而苹果也还会长出来。但有了货币的参与之后，人类被货币所代表的制度所绑架。需要苹果的人吃不到苹果，大量的苹果腐烂。尤其是随着生产力技术的
          进步和快速发展，绝大部分人被困在无意义的忙碌中为生存挣扎。以前是因为落后的生产力必须借助货币进行资源配置，而当今极为先进和快速迭代的生产力技术完全有能力实现新的分配制度</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">3. 生产力的组织及完全价值赎回</h2>
          <p className="text-base">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;传统的消费实质上是一种去权利的过程，在新的生产-消费制度下，消费者购买产品花了多少钱，就会获得多少权证，权证可以赎回，也可以转让。
            赎回的时候，按照产品已损失的价值进行赎回。为了计算产品已损失的价值，需要一个标准，这个的标准一般设定产品用寿命或有效期，使用寿命结束，产品就失去了价值。
            此时的权证赎回就是购买产品花了多少钱，就赎回多少钱。
            
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果提前赎回，则需要支付一定的非信任成本。赎回的价值是赎回日期之前产品损失的所有价值。之后的产品价值损失无法赎回。这种称为一次赎回。
             举个例子，在网站  
             <a href="https://huan270.cn/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">https://huan270.cn/</a> 和 
            <a href="https://shengchan.shop/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">https://shengchan.shop/</a>
  
             
             中，用户可以购买鞋子并获得权证（消费证明），已经规定鞋子有效期是270天，270天后用户可以用权证
            赎回买鞋子花的钱，当然也可以提前赎回（一次赎回），参考赎回计价公式。
          </p>

         
          <br/>

          <p  className="text-base">
            赎回买鞋子花的钱。赎回计价公式为：
            <BlockMath math="R = \frac{D}{270} \cdot N" />
            其中：
            <ul>
              <li><InlineMath math="R" /> 为赎回金额</li>
              <li><InlineMath math="D" /> 为已购买天数</li>
              <li><InlineMath math="P" /> 为鞋子价格</li>
              <li><InlineMath math="N" /> 为权证数量（<InlineMath math="N \leq P" />）</li>
            </ul>
          </p>
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          通过以上这种模式，在270天内，将消费者的信任组织成生产力，让每一个用户都有生产力所有权，随着组织和发展，用先进技术迭代自动化生产，
          生产力会越来越强，这个过程中逐渐对用户开放二次赎回，三次赎回机制，最后实现完全价值赎回。
          由于生产力的组织和建设需要一定的成本和社会资源，在最开始，只能实行一次赎回，也就是对于一个订单，只有一次赎回机会，如果提前赎回，后续的价值损失无法赎回。
          同理，二次赎回，就是对于一个订单，用户可以赎回两次，第一次赎回后，赎回计价按照剩余的价值损失进行计算，第二次赎回后，后续的价值损失无法赎回。三次赎回也是同理。
          不管是一次赎回，二次赎回，还是三次赎回，只要最后的一次赎回机会在满产品有效期后赎回。都可以达到完全价值赎回的效果。
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 使用区块链技术，可以很好的将这种过程公开透明化，同时，生产力权证Token
          实质上是消费者对生产者的一种信任和投票，
          当这种分配思想被广大群众普及和接受后，只有有信用的生产者才能把产品出售给消费者，以获得足够的资本进行生产力的升级，和产品开发。
          其生产力权证Token将具有极高的价值，因为这种Token实质上代表的是一种权力，一种按需分配的权力。
       



        </section>
        <section>
          <h2  className="text-xl font-semibold mb-4">4. 发展计划</h2>
          <p className="text-base">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;践行新的分配制度，考虑品牌效应，获取生产资料，对外输出生产力，和传统的生产力组织进行竞争。
            生产力权证制度，实质上是一种新的生产力组织形式，其表现是财富分配。这种制度如果普遍实行，将彻底解放生产关系。
            根植在货币上的经济，资本等字眼相关的事物将不复存在。
            全力创造一个成功使用生产力权证后自维持运行的案例，不断地将产业链扩展链接，形成一个庞大的生产力权证生态。
            形成示范效应，引导企业进行产品价值赎回制度，最后是完全价值赎回，以及生产力权证所代表的按需分配权力的普及。
    
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
