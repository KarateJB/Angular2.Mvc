using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2.Mvc.xUnitTest.Model
{
    public class TestCase
    {
        public static readonly List<object[]> Data = new List<object[]>
           {
              new object[]{"A,B,C",3},
              new object[]{"1,2,3,4",4},
              new object[]{"(,&,*,#,!",5}
           };

        public static IEnumerable<object[]> TestCaseIndex
        {
            get
            {
                List<object[]> tmp = new List<object[]>();
                for (int i = 0; i < Data.Count; i++)
                    tmp.Add(new object[] { i });
                return tmp;
            }
        }
    }
}
