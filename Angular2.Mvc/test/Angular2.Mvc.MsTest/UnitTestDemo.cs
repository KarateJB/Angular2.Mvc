using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Angular2.Mvc.MsTest.Service;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NSubstitute;

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

        //[TestMethod]
        //public void TestSplitCounter()
        //{
        //    var splitConfig = new SplitConfig();
        //    Debug.WriteLine(splitConfig.Separator);

        //    var input = "Luke Skywalker, Leia Skywalker, Anakin Skywalker";
        //    var expected = 3;
        //    var actual = (new SplitCounter()).Calculate(input);
        //    Assert.AreEqual(expected, actual);
        //}

        [TestMethod]
        public void TestSplitCounterWithNSub()
        {
            #region Create the Substitutes
            //Create the Nsubs for the interfaces
            var splitConfig = Substitute.For<ISplitConfig>();
            #endregion

            #region Set the return value of the mock objects
            splitConfig.Separator.Returns(new char[] { ';' });
            #endregion

            #region Intialize the test target
            var splitCounter = new SplitCounter();
            splitCounter._splitConfig = splitConfig;
            #endregion


            var input = "Luke Skywalker;Leia Skywalker;AnakinSkywalker";
            var expected = 3;
            var actual = splitCounter.Calculate(input);
            Assert.AreEqual(expected, actual);
        }

    }
}
