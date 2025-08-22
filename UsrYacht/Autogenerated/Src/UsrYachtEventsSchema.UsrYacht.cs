namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrYachtEventsSchema

	/// <exclude/>
	public class UsrYachtEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrYachtEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrYachtEventsSchema(UsrYachtEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("f8566f9a-95ef-4c13-8c8b-15101a51aa9c");
			Name = "UsrYachtEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ef0fc645-25bc-436c-974e-71a06c68d3b5");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,0,3,141,82,81,107,219,48,16,126,47,244,63,28,126,178,33,136,237,117,217,10,77,200,70,161,180,163,113,6,99,244,65,145,47,142,134,44,25,157,156,46,27,253,239,59,89,73,155,218,45,244,94,236,59,125,247,221,125,31,7,86,54,72,173,84,8,37,122,47,201,109,130,152,59,187,209,117,231,101,208,206,158,159,253,59,63,3,142,142,180,173,97,185,167,128,205,244,180,116,218,216,52,206,190,249,232,81,44,108,208,65,35,189,7,35,22,59,180,225,8,253,213,151,247,125,237,90,243,18,22,125,190,84,91,108,228,13,107,128,47,144,173,200,255,148,106,27,178,226,62,245,180,221,218,104,5,202,72,34,232,159,94,33,129,79,48,147,132,175,188,36,146,131,252,19,62,183,227,133,117,133,176,115,186,130,91,187,148,59,150,145,187,245,111,84,1,8,109,133,126,2,137,112,134,27,214,212,211,94,250,154,0,139,103,186,19,230,24,107,222,66,60,177,29,105,176,152,190,132,37,94,216,71,57,172,58,79,121,145,240,3,108,133,74,55,210,64,235,181,138,22,245,77,226,27,134,114,223,98,53,119,166,107,236,15,105,58,252,124,64,94,228,209,197,239,17,158,13,7,235,13,228,137,232,2,62,126,136,81,188,4,12,244,196,64,113,69,115,105,21,26,172,120,126,240,29,78,199,40,10,62,222,1,95,34,201,26,75,108,90,35,67,220,215,226,3,92,59,37,141,254,43,215,6,151,61,46,79,42,86,132,158,47,213,178,231,124,166,226,14,201,117,94,49,198,121,38,153,140,167,196,120,186,145,116,91,217,4,178,17,63,137,222,146,43,42,157,155,233,58,101,89,33,74,119,152,63,52,102,44,129,87,79,5,241,213,249,70,134,124,32,141,199,178,131,192,22,194,98,117,55,114,58,70,216,122,247,208,27,176,248,163,176,141,26,143,44,67,248,227,115,122,248,229,207,227,127,160,191,181,232,219,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("c7bd9bab-d89f-e6d9-29bb-5c2ac1665ade"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("ef0fc645-25bc-436c-974e-71a06c68d3b5"),
				CreatedInSchemaUId = new Guid("f8566f9a-95ef-4c13-8c8b-15101a51aa9c"),
				ModifiedInSchemaUId = new Guid("f8566f9a-95ef-4c13-8c8b-15101a51aa9c")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("f8566f9a-95ef-4c13-8c8b-15101a51aa9c"));
		}

		#endregion

	}

	#endregion

}

