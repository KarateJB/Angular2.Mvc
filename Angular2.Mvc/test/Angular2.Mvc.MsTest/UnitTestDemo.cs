using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Angular2.Mvc.MsTest
{
    [TestClass]
    public class UnitTestDemo
    {
        [TestMethod]
        public void TestSplitCount()
        {
            var input = "Luke Skywalker, Leia Skywalker, Anakin Skywalker";
            var expected = 3;
            var actual = input.Split(',').Count();
            Assert.AreEqual(expected, actual);
        }

    }
}
