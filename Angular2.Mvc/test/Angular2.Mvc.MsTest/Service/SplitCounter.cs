using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2.Mvc.MsTest.Service
{
    public class SplitCounter
    {
        public ISplitConfig _splitConfig = null;

        public SplitCounter()
        {
            this._splitConfig = new SplitConfig();
        }

        public int Calculate(string input)
        {
            if (this._splitConfig == null)
            {
                throw new NullReferenceException("SplitConfig is null!");
            }
            else
            {
                return input.Split(this._splitConfig.Separator).Count();
            }
        }
    }
}
