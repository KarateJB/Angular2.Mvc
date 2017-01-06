using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular2.Mvc.Service.Factory;
using Xunit;
using Angular2.Mvc.xUnitTest.Model;

namespace Angular2.Mvc.xUnitTest
{
    public class UnitTestDemo
    {

        [Fact]
        public void TestSplitCount()
        {
            var input = "Luke Skywalker, Leia Skywalker, Anakin Skywalker";
            var actual = input.Split(',').Count();

            Assert.True(actual.Equals(3), $"Expected:3, Actual:{actual}");
        }

        //[Theory]
        //[InlineData("A,B,C")]
        //[InlineData("1,2,3")]
        //[InlineData("#,^,*")]
        //public void TestSplitCountComplexInput(string input)
        //{
        //    var actual = input.Split(',').Count();

        //    Assert.True(actual.Equals(3), $"Expected:3, Actual:{actual}");
        //}

        [Theory]
        [MemberData("TestCaseIndex", MemberType = typeof(TestCase))]
        public void TestSplitCountComplexInput(int index)
        {
            var input = TestCase.Data[index];
            var value = (string)input[0];
            var expected = (int)input[1];
            var actual = value.Split(',').Count();

            Assert.True(actual.Equals(expected), $"Expected:{expected}, Actual:{actual}");

        }
    }

}
