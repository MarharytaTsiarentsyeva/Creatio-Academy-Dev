  namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;
    using System;
    using System.Web.SessionState;

	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class UsrYachtAvgPriceService : BaseService, IReadOnlySessionState
	{
		// GUID статуса "Operational" (замени при необходимости)
		// private static readonly Guid OperationalStatusId = new Guid("877edb5b-22d8-40a9-bb3f-4f4c65f6dea3");

		/// <summary>
		/// Средняя цена яхт по driveTypeId и статусу Operational.
		/// Если driveTypeId пустой/не GUID — возвращает -1.
		/// Если подходящих записей нет — возвращает 0.
		/// </summary>
		[OperationContract]
		[WebInvoke(
			Method = "POST",
			BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json,
			ResponseFormat = WebMessageFormat.Json)]
		public decimal GetAveragePriceByDriveTypeId(string driveTypeId)
		{
		     if (string.IsNullOrWhiteSpace(driveTypeId) || !Guid.TryParse(driveTypeId, out var driveGuid))
				    return -1m;

		    var select = new Select(UserConnection)
	        .Column(Func.Coalesce(Func.Avg("UsrPrice"), Column.Parameter(0m)))
	        .From("UsrYacht")
	        .Where("UsrDriveTypeId").IsEqual(Column.Parameter(driveGuid))
	        .And("UsrStatusId").IsEqual(Column.Parameter(new Guid("877edb5b-22d8-40a9-bb3f-4f4c65f6dea3")))
		    as Select;

		    var avg = select.ExecuteScalar<decimal>();
			return Math.Round(avg, 2, MidpointRounding.AwayFromZero);
		}

		// health-check
		[OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
	        RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string GetExample()
        {
            return "OK!";
        }
	}
}